export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("img");
    
    eleventyConfig.addShortcode("formatDate", () => {
        return new Date().toISOString().split("T")[0]
    })


    return{
        markdownTemplateEngine:"njk",
    }
};