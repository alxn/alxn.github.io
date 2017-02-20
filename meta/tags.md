---
layout: default
permalink: /meta/tags
---

<section class="meta" id="tags">
  <h1>All Tags:</h1>
  <div class="tags-expo-list">
    {% for tag in site.tags %}
    <a href="#{{ tag[0] | slugify }}" class="post-tag">{{ tag[0] }}</a>{% if forloop.last %}.{% else %}, {% endif %}
    {% endfor %}
  </div>
  <hr/>
  <div class="tags-expo-section">
    {% for tag in site.tags %}
    <h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
    <ul class="tags-expo-posts">
      {% for post in tag[1] %}
      <li>
        <time>{{ post.date | date: "%d %b" }}</time><a href="{{ post.url }}">{{ post.title }}</a>
      </li>
      {% endfor %}
    </ul>
    {% endfor %}
  </div>
</section>
