---
layout: default
permalink: /meta/categories
---

<section class="meta" id="categories">
  <div class="header">
    <i class="fa fa-folder-open fa-3x fa-pull-left" aria-hidden="true"></i>
    <h2>Categories</h2>
  </div>
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
