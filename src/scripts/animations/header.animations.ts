import { gsap } from "gsap"

export function initHeaderAnimations(): void {

  gsap.from('.hero-title',{
    opacity: 0,
    x: -40,
    duration: 2,
    ease: "power3.out",
    delay: 0.3
  })
}