---
layout: default  # 使用统一布局
title: Portfolio
permalink: /portfolio/
---

<section class="portfolio-container">
  <h1>{{ page.title }}</h1>
  
  <!-- Canva Portfolio Section -->
  <div class="canva-portfolio">
    <h2>Portfolio</h2>
    <div class="canva-embed">
      <iframe src="https://www.canva.com/design/DAGpyWq0L8w/VtJXuxndt_eM1sDihw6Rvw/view?embed" 
              width="100%" 
              height="600" 
              frameborder="0" 
              allowfullscreen>
      </iframe>
    </div>
  </div>

  <!-- Existing Projects Section -->
  <h2>Projects</h2>
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