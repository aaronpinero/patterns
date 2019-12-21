---
title: Page Structure
---

The HTML structure of a wireframe page looks like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <%include head.html%>
    <title>Page Title</title>
    [ page specific head elements ]
  </head>
  <body>
    <%include header.html%>
    [ breadcrumb, if necessary ]
    <main>
      [ page content ]
    </main>
    <%include footer.html%>
    [ page specific scripts, if necessary ]
  </body>
</html>
```