const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/static");

  if (process.env.ELEVENTY_ENV === 'production') {
    // Minify HTML (including inlined CSS)
    eleventyConfig.addTransform("compressHTML", function(content, outputPath) {
      if (outputPath.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true
        });
        return minified;
      }
      return content;
    });
  }

  return {
    dir: {
      input: "src/",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",

    passthroughFileCopy: true
  };
};
