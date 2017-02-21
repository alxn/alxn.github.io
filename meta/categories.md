---
layout: default
permalink: /meta/categories
---

<section class="meta" id="categories">
  <h1>
    <i class="fa fa-sitemap" aria-hidden="true"></i>
    Categories
  </h1>
  <div class="summary">
    <ul class="posts">
    {% for tag in site.categories %}
    <li>
      <a href="#{{ tag[0] | slugify }}" class="post-tag">{{ tag[0] }}</a>{% if forloop.last %}.{% else %}, {% endif %}
    </li>
    {% endfor %}
    </ul>
  </div>
  <hr/>
  <div class="details">
    {% for tag in site.categories %}
    <h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
    <ul class="posts">
      {% for post in tag[1] %}
      <li>
        <time>{{ post.date | date: "%d %b" }}</time><a href="{{ post.url }}">{{ post.title }}</a>
      </li>
      {% endfor %}
    </ul>
    {% endfor %}
  </div>
</section>
