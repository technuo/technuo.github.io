---
layout: default  # 使用统一布局
title: Portfolio
permalink: /portfolio/
---

<section class="portfolio-container">
  <h1>{{ page.title }}</h1>
  
  <div class="project-grid">
    {% for project in site.portfolio %}
      <article class="project-card">
        <a href="{{ project.url | relative_url }}">
          {% if project.image %}
            <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="project-image">
          {% endif %}
          <h3>{{ project.title }}</h3>
        </a>
        <p class="project-excerpt">{{ project.excerpt | strip_html | truncate: 100 }}</p>
      </article>
    {% endfor %}
  </div>
</section>