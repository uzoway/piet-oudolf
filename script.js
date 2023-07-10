// Function to run start animation only when the page is loaded
function initializeAnimation() {
    gsap.set(".text__wrapper", { height: () => document.querySelector(".text__wrapper--content").offsetHeight + 2 + "px" });
    gsap.set(".preloader__heading, .text__wrapper--content", { autoAlpha: 1 })

    const timeline = gsap.timeline({ defaults: { ease: "expo.inOut", duration: 1, delay: 1 } })
    timeline.from(".paragraph__container", { y: () => document.querySelector(".text__wrapper--content").offsetHeight + 2 + "px" })

    .to(".wrapper__heading", { y: () => `${(document.querySelector("body").offsetHeight - document.querySelector(".wrapper__heading").offsetHeight)+"px"}`,  duration: .7}, 0)

    .from(".preloader__heading span", { y: () => document.querySelector(".preloader__heading span").offsetHeight + 2 + "px", }, 0)

    .to(".paragraph__container", { y: () => -document.querySelector(".text__wrapper--content").offsetHeight - 1 + "px", delay: .4, duration: .8 })

    .to(".paragraph__container", { y: () => -document.querySelector(".text__wrapper--content").offsetHeight * 2 + "px", delay: .4, duration: .8 })

    .to(".paragraph__container", { y: () => -document.querySelector(".text__wrapper--content").offsetHeight * 3 + "px", delay: .4, duration: .8 })

    .to(".preloader__heading span", { y: () => -document.querySelector(".preloader__heading span").offsetHeight + 2 + "px"}, "<-1")

    .to(".wrapper__heading", { y: 0 }, "<-.9")

    .to(".preloader", { top: "-100vh", duration: 1.1 }, "<-1")

    .to(".footer__line", { width: "100%", duration: 1 }, "-=1.4")

    .from(".footer .item", { y: () => document.querySelector(".item__heading").offsetHeight, stagger: 0.1 }, "<-1")

    .from(".paragraph__wrapper span, .left__content--link span", { y: () => document.querySelector(".paragraph__wrapper").offsetHeight, stagger: 0.06 }, "-=1.9")

    .to(".right__content--controls", { autoAlpha: 1, duration: .6 }, "-=2")

    .to(".right__content--video", { clipPath: "polygon(0 100%, 100% 100%, 100% 3%, 0 3%)", duration: 1.2 }, "-=2.2");
}

window.addEventListener("load", initializeAnimation);