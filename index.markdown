---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults


layout: home
---
<img src="\assets\images\Retro Pixel Logo-technuo.png" alt="technuo" style="float: left; margin-right: 10px; width: 150px;">
# Hi，I am [Nuo] 👋

**I am a coding enthusiast who speaks fluent Python and dreams in indents. Passionate about EVs and the embedded magic that makes them tick. If it runs on code (or batteries), I'm probably obsessed with it!**

{% include company-logos.html %}

## New Post
{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url }})  
  <small>{{ post.date | date: "%Y-%m-%d" }}</small>
{% endfor %}


