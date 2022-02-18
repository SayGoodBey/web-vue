const { defineConfig } = require("@vue/cli-service");
const path = require("path");
//路径
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
});
