module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./_site/assets');
  eleventyConfig.addPassthroughCopy('./_site/css');

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: '_site',
      data: '_data',
      includes: '_includes',
      layouts: '_layouts',
      output: 'dist'
    }
  }
}