# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

- Mobile (max-width: 375px) and Desktop (max-width: 1440px)

### Screenshot

![Mobile](./screenshots/mobile-max-375px.png)

![Desktop](./screenshots/desktop-max-1440px.png)

### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/html-and-css-GYtWZ2_V0)
- Live Site URL: [Live site](https://amazing-brahmagupta-e2f3de.netlify.app/newbie/stats-preview-card-component-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- Google Fonts
- CSS Media queries
- And love


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

```css

/** Code to get the challenge overlay color **/

.card-header {
    height: 250px;
    background-image: url(/newbie/stats-preview-card-component-main/images/image-header-mobile.jpg);
    background-color: var(--soft-violet);
    background-size: cover;
    background-blend-mode: multiply;
    background-repeat: no-repeat;
}
.card-header--overlay {
    width: 100%;
    height: 100%;
    background-color: var(--soft-violet);
    opacity: .3;
}
```