const { DateTime } = require("luxon");

module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addWatchTarget("src/assets");
    
	return {
		dir: {
			input: 'src',
            output: '_site'
		},
        templateFormats: [ "md", "njk", "html", ],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
	}

};
