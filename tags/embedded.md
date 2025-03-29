---
layout: tag
title: embedded
---

{% for post in site.tags.embedded %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}