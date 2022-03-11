# React-Port

---

| Table of contents                       |
| --------------------------------------- |
| [Technologies Used](#Technologies-Used) |
| [Description](#Description)             |
| [Link](#Link)                           |
| [Images](#Images)                       |
| [Author](#Author)                       |

---

## Technologies Used

- [Node](https://nodejs.dev/)
- [React](https://reactjs.org/docs/create-a-new-react-app.html)
- [Boot-Strap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

---

## Description

An attempt at creating a portfolio using React for thr first time.

---

## Link

deployed link
<br>
[here](#)

![site](src/components/assets/images/site.png)

---

## Images

> Contact information found in the footer

![Inquirer](src/components/assets/images/contact.png)

> Users can navigate through site tabs that load pages

![Fullsite](src/components/assets/images/pages.png)

> Here's a code snippit on how the pages get rendered

```javascript
const renderPage = () => {
  if (currentPage === "About") {
    return <About />;
  }
  if (currentPage === "Project") {
    return <Project />;
  }
  if (currentPage === "Resume") {
    return <Resume />;
  }
};
```

---

## Author

#### Joshua Meza

[GitHub](https://github.com/705h-S) <br>
[linkedin](https://www.linkedin.com/in/joshua-meza-918b77224/)
