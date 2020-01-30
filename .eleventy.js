module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/static");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts"
    },
  };
}
