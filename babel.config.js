const plugin = [
  [
    "import",
    { libraryName: "ant-design-vue", libraryDirectory: "es", style: "css" },
  ], // `style: true` 会加载 less 文件
];
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: plugin,
};
