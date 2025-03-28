---
layout: home  # 直接使用主页的布局
title: Blog
permalink: /blog/
---

## 所有文章
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      ({{ post.date | date: "%Y-%m-%d" }})
    </li>
  {% endfor %}
</ul>