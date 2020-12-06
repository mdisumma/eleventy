---
css: ../../css/style.css
siteTitle: Marco Di Summa
title: Marco Di Summa
subtitle: Comparative paper
logo: ../../images/mds-logo-rgb200.svg
articletitle: Comparing WordPress and Jamstack
# navigation
about: "../../index.html"
info: "../../post/info/index.html"
journal: "../../post/journal/index.html"
articles: "../../post/articles/index.html"
projects: "../../post/projects/index.html"
essay: "../../post/essay/index.html"
#download
pdf: "../../images/comparative-paper.pdf"
---

<!DOCTYPE html>
<html lang="en">
{% include "head.njk" %}
<body>
{% include "template-post.njk" %}
<!----------- main ------------>
<main> 
<ol> 
  <li><a href={{pdf}} download>Dowload PDF</a></li>
</ol>

<article>

# {{ articletitle }}

 <iframe src={{pdf}} width="100%" height="1150px">
    </iframe>
</article> 

*Thank you for visiting mdisumma.com*

</main>
<!-- ----------footer---------- -->
{% include "social.njk" %}
</body>
</html>
