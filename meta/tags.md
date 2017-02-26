---
layout: default
permalink: /meta/tags
---

<section class="meta" id="tags">
  <div class="header">
    <i class="fa fa-tags fa-3x fa-pull-left" aria-hidden="true"></i>
    <h1>Tags</h1>
  </div>
  <div class="summary">
    <ul class="posts">
    {% for tag in site.tags %}
    <li>
      <a href="#{{ tag[0] | slugify }}" class="post-tag">{{ tag[0] }}</a>{% if forloop.last %}.{% else %}, {% endif %}
    </li>
    {% endfor %}
    </ul>
  </div>
  <hr/>
  <div class="details">
    {% for tag in site.tags %}
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
