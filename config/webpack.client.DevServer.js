"use strict";

const errorOverlayMiddleware = require("react-dev-utils/errorOverlayMiddleware");
const evalSourceMapMiddleware = require("react-dev-utils/evalSourceMapMiddleware");
const noopServiceWorkerMiddleware = require("react-dev-utils/noopServiceWorkerMiddleware");
const ignoredFiles = require("react-dev-utils/ignoredFiles");
const paths = require("./paths");
const fs = require("fs");

const protocol = process.env.HTTPS === "true" ? "https" : "http";
const host = process.env.HOST || "0.0.0.0";

module.exports = function(proxy, allowedHost) {
    
    return {
        disableHostCheck:
            true || !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === "true",
        // Enable gzip compression of generated files.
        compress: true,
        clientLogLevel: "none",
        contentBase: paths.appPublic,
        // By default files from `contentBase` will not trigger a page reload.
        watchContentBase: true,
        hot: true,
        publicPath: "/",
        quiet: true,
        watchOptions: {
            ignored: ignoredFiles(paths.appSrc)
        },
        // Enable HTTPS if the HTTPS environment variable is set to 'true'
        https: protocol === "https",
        host,
        overlay: false,
        historyApiFallback: {
            // Paths with dots should still use the history fallback.
            // See https://github.com/facebook/create-react-app/issues/387.
            disableDotRule: true
        },
        public: allowedHost,
        proxy,
        before(app, server) {
            if (fs.existsSync(paths.proxySetup)) {
                // This registers user provided middleware for proxy reasons
                require(paths.proxySetup)(app);
            }

            // This lets us fetch source contents from webpack for the error overlay
            app.use(evalSourceMapMiddleware(server));
            // This lets us open files from the runtime error overlay.
            app.use(errorOverlayMiddleware());

            // This service worker file is effectively a 'no-op' that will reset any
            // previous service worker registered for the same host:port combination.
            // We do this in development to avoid hitting the production cache if
            // it used the same host and port.
            // https://github.com/facebook/create-react-app/issues/2272#issuecomment-302832432
            app.use(noopServiceWorkerMiddleware());
        }
    };
};
