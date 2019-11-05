
const webpack = require("webpack");
const config = require("../config/webpack.client.prod");
const fs = require("fs-extra");
const path = require("path");


console.log(config)
const compiler = webpack(config);


//fs.unlinkSync(path.join(process.cwd(), "src"))

compiler.run((err, stats) => {
    console.log(stats)
})