---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults


layout: home
---
![alt text](\assets\images\Retro Pixel Logo-technuo.png)
# Hi，I am [Nuo] 👋

**I am a coding enthusiast who speaks fluent Python and dreams in indents. Passionate about EVs and the embedded magic that makes them tick. If it runs on code (or batteries), I’m probably obsessed with it!**

## New Post
{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url }})  
  <small>{{ post.date | date: "%Y-%m-%d" }}</small>
{% endfor %}


