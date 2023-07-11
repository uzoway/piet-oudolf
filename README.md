# Piet Oudolf Exploration/Animation design


https://github.com/uzoway/piet-oudolf/assets/73430874/4aaf07a9-2243-4133-873b-7dfbda19b493


This repo is for the development of a web exploration/animation for Piet Oudolf designed by [Alex Tkachev](https://twitter.com/simply_aalex) 👉 [here](https://twitter.com/simply_aalex/status/1677228778768957440). 

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Approach](#approach)
- [Author](#author)
- [Credit](#credit)

## Overview

## My process

### Built with

- HTML5
- CSS3
- JavaScript/GSAP

### Approach

This was pretty straightforward. So, I started by creating a gsap timeline with some default properties and tied all the tweens to it.
To ensure smooth easing and timing, I made use of GSAP's position parameter(relative/absolute) which gives you total control on where tweens are placed. This helped me get the animation as close as possible to the initial animation design made by Alex.
And like always, I watched the video at a reduced playback speed to get a better feel of the motion.
The entire animation is inside a function ***initializeAnimation()*** that only gets called when the page is loaded.

## Author

- LinkedIn - [Uzochukwu Okafor](https://www.linkedin.com/in/uzochukwuokafor/)
- Twitter - [@uzoway_](https://twitter.com/Uzoway_)

## Credit 

Huge credits goes to [Alex Tkachev](https://twitter.com/simply_aalex)🙌 for the designs
