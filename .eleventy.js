module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./_site/images');
  eleventyConfig.addPassthroughCopy('./_site/css');

  return {
    dir: {
      input: '_site',
      output: 'dist'
    }
  }
}