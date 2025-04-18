---
layout: default
---

# 👋 Hi, I'm Sajeevan Jeyakumar

I'm a passionate **ML Engineer** who builds intelligent systems and data-driven solutions. I love exploring AI, building cool projects, and turning ideas into products.

## 🚀 Projects

{% for project in site.projects %}
### [{{ project.title }}]({{ project.url | relative_url }})
{{ project.description }}
{% endfor %}

## 📫 Connect with me
- [GitHub](https://github.com/sajeevan-jeyakumar)
- [LinkedIn](https://linkedin.com/in/sajeevan-jeyakumar)
- 📧 [Email](mailto:sajeevan@example.com)
