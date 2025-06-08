---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults


layout: home
---
<img src="\assets\images\Retro Pixel Logo-technuo.png" alt="technuo" style="float: left; margin-right: 10px; width: 150px;">
# Hi, I am [Nuo] 👋

I'm a multi-passionate entrepreneur and developer with a foundation in electromobility engineering and a deep love for technology that moves — whether it's powered by batteries or by brilliant code. I currently run three companies: milu AB, bridging trade between Sweden and China; Tant Anci och Fröken Sara AB, a venture in organic dining and café culture; and Kafe AI, my latest project where I'm building intelligent solutions at the intersection of hospitality and machine learning.

Though I started as a coding enthusiast fluent in Python and obsessed with embedded systems and EVs, I've grown into someone who blends business insight with software craftsmanship. I'm currently studying Software Development for Mobility Services (Mjukvaruutvecklare inriktning mobilitetstjänster) to sharpen my development skills and deepen my impact in the AI space.

I believe in writing clean code, brewing bold ideas, and building things — from scratch — that matter.

{% include company-logos.html %}

## New Post
{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url }})  
  <small>{{ post.date | date: "%Y-%m-%d" }}</small>
{% endfor %}


