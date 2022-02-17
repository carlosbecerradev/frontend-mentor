# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Article preview component solution](#frontend-mentor---article-preview-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

Desktop ![Mobile](./design/desktop-design.jpg)

Desktop active ![Mobile](./design/desktop-active-state.jpg)

Mobile ![Mobile](./design/mobile-design.jpg)

Mobile active ![Mobile](./design/mobile-active-state.jpg)

## My process

### Built with

- HTML
- CSS
- Javascript
- Google Fonts
- SVG files
- And love

### What I learned

I can't use box-shadow attribute in pseudo-elements with clip-path attribute, but i can use the filter attribute, and the shadow will follow the shape.

```css
.share-content {
  filter: drop-shadow(0 2px 6px var(--very-dark-grayish-blue));
}
.share-content::before {
  clip-path: polygon(0 0, 50% 100%, 100% 0);
}
```
