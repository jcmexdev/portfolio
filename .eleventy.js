module.exports = function (eleventyConfig) {
  // Passthrough copy for assets, CSS, and JS
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/cv.css");
  eleventyConfig.addPassthroughCopy("src/script.js");

  // Keep the same directory structure internally
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    // Eleventy template formats
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
