import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function gsapScrollAnimations() {
  const defaults = {
    duration: 1.5,
    ease: "power3.out",
    animation: "fade_from_bottom",
    once: !1,
  };

  gsap.utils.toArray("[data-scroll-container]").forEach((item) => {
    const settings = {
      duration: item.dataset.animationDuration || defaults.duration,
    };

    const animations = {
      fade_from_bottom: {
        y: 200,
        opacity: 0,
      },
      fade_from_left: {
        x: -200,
        opacity: 0,
      },
      fade_from_right: {
        x: 200,
        opacity: 0,
      },
      fade_in: {
        opacity: 0,
      },
    };

    const newScrollTrigger = {
      scrollTrigger: {
        trigger: item,
        once: defaults.once,
        start: "top bottom+=20%",
        markers: !1,
      },
    };

    const gsapObj = {
      ...settings,
      ...animations[item.dataset.animation || defaults.animation],
      ...newScrollTrigger,
    };

    gsap.from(item, gsapObj);
  });
}

gsapScrollAnimations();
