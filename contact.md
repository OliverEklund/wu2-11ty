---
title: Kontakt
layout: layout.html
---

#kontakta oss

Här kan ni nå oss på företaget

##Våra anställda

<ul>
{% for employee in employes.items %}
    <li>
        <h3>{{ employee.name}}</h3>
        <p>{{ employee.position}}</p>
        <p>{{ employee.email }}</p>
        <img src="/img/{{ employee.picture }}" alt="">
    </li>
{% endfor %}
</ul>