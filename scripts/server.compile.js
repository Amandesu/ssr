

const webpack = require("webpack");
const config = require("../config/webpack.server.prod");
const fs = require("fs-extra");
const path = require("path");


console.log(config)
const compiler = webpack(config);


//fs.unlinkSync(path.join(process.cwd(), "src"))

compiler.run((err, stats) => {
    console.log(stats)
})


/* const spawnSync = require("child_process").spawnSync;
const spawn = require("child_process").spawn;
const exec = require("child_process").exec;

const child = spawnSync("npx", [
    "babel",
     "src/containers/index.js",
     "--out-file",
      "dist/app.js"
])

 */