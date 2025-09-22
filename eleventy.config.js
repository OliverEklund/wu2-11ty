export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    
    eleventyConfig.addShortcode("formatDate", () => {
        return new Date().toISOString().split("T")[0]
    })

    return{
        markdownTemplateEngine:"njk",
    }
};

<ul class="nav__list">
  {% for item in navigation.items %}
  <li>
    <a href="{{ item.url }}">{{ item.text }}</a>
  </li>
  {% endfor %}
</ul>