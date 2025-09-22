---
layout: layout.html
---
# detta är post sidan

<ul class="post-list">
{%- for post in collections.mat -%}
    <li class="post-item">
        <time>{% formatDate post.date %}</time>
        <h2><a href="{{post.url}}">{{post.data.title | capitalize}}</a></h2>
        <p>{{post.data.summary}}</p>
    </li>
{%- endfor -%}
</ul>