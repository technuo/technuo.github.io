---
layout: default
title: Blog
permalink: /blog/
---

<div class="blog-container">
    <h1>博客文章</h1>
    
    <div class="tag-filter">
        <h3>按标签筛选：</h3>
        <div class="tag-buttons">
            {% for tag in site.tags %}
            <button class="tag-button" data-tag="{{ tag[0] }}">{{ tag[0] }}</button>
            {% endfor %}
        </div>
    </div>

    <div class="posts-list">
        {% for post in site.posts %}
        <article class="post-item" data-tags="{% for tag in post.tags %}{{ tag }} {% endfor %}">
            <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
            <div class="post-meta">
                <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
                <div class="post-tags">
                    {% for tag in post.tags %}
                    <span class="tag">{{ tag }}</span>
                    {% endfor %}
                </div>
            </div>
            <p>{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
        </article>
        {% endfor %}
    </div>
</div>

<style>
.blog-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

.tag-filter {
    margin: 2rem 0;
}

.tag-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}

.tag-button {
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 20px;
    background: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.tag-button:hover {
    background-color: #007bff;
    color: white;
}

.tag-button.active {
    background-color: #007bff;
    color: white;
}

.post-item {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;
}

.post-meta {
    margin: 0.5rem 0;
    color: #666;
}

.post-tags {
    display: inline-block;
    margin-left: 1rem;
}

.tag {
    background-color: #f0f0f0;
    padding: 0.2rem 0.5rem;
    border-radius: 3px;
    font-size: 0.9rem;
    margin-right: 0.5rem;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const tagButtons = document.querySelectorAll('.tag-button');
    const posts = document.querySelectorAll('.post-item');

    tagButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedTag = this.dataset.tag;
            
            // Toggle active state
            this.classList.toggle('active');
            
            // Filter posts
            posts.forEach(post => {
                const postTags = post.dataset.tags.split(' ');
                const isVisible = postTags.includes(selectedTag);
                post.style.display = isVisible ? 'block' : 'none';
            });
        });
    });
});
</script>