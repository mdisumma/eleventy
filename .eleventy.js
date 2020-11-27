module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./_site/images');
  eleventyConfig.addPassthroughCopy('./_site/css');

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: '_site',
      output: 'dist'
    }
  }
}