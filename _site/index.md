---
css: css/style.css
siteTitle: Marco Di Summa
title: Marco Di Summa
subtitle: Web Development
logo: images/mds-logo-rgb200.svg
articletitle: About me
# navigation
about: "index.html"
info: "post/info/index.html"
journal: "post/journal/index.html"
articles: "post/articles/index.html"
projects: "post/projects/index.html"
essay: "post/essay/index.html"
---

<!DOCTYPE html>
<html lang="en">
{% include "head.njk" %}
<body>
{% include "template-post.njk" %}

<!----------- main ------------>
<main> 
<article>

# {{ articletitle }}
I am passionate for art and technology, and eager to turn this passion into a career.
I built my foundation in graphic and web design at WAES (Westminster Adult Educational Service), and recently I have started a new exciting degree in web development at SAE Institute.
I want to thank all the people who kindly supported me during these years, and If you are a student and face the same struggle I do, my suggestion is to be patient and perseverant, results are coming!
During this time of uncertainty, I want to remind everyone how important it is to stay connected. Therefore, if you are a creative person who needs support or looking to start a new exciting project, please drop me a message.

</article> 

*Thank you for visiting mdisumma.com*

</main>
<!-- ----------footer---------- -->
{% include "social.njk" %}
</body>
</html>



