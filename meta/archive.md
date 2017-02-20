---
layout: default
permalink: /meta/archive
---

<section class="archive">

   {% for post in site.posts %}
       {% assign postYear = post.date | date: "%Y" %}
       {% if postYear != listYear %}
           {% if forloop.first %}
           <h1>This year's posts:</h1>
           {% else %}
		   </ul>
           <h1>{{ postYear }}:</h1>
           {% endif %}
           <ul>
           {% assign listYear = postYear %}
       {% endif %}
       <li><time>{{ post.date | date: "%d %b" }}</time><a href="{{ post.url }}">{{ post.title }}</a></li>
       {% if forloop.last %}</ul>{% endif %}
   {% endfor %}

</section>
