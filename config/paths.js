


const fs = require("fs");
const path = require("path");
const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = (relative) => path.resolve(appDirectory, relative)


module.exports = {
   // appBuild: resolveApp("build"),
    appPath: resolveApp('.'),
    appSrc:resolveApp("src"),
    appIndexJs: resolveApp("src/index.js"),
    appPublic:resolveApp("public"),
    appHtml:resolveApp("public/index.html"),
    appPackageJson: resolveApp('package.json'),
    appNodeModules: resolveApp('node_modules')
}