import { gsap } from "gsap";


export function initLandingAnimations(): void {
  // Fade down - name
  gsap.from(".dev-name", {
    opacity: 0,
    y: -40,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.3
  })

  // Zoom out - job title
  gsap.from(".dev-job", {
    opacity: 0,
    scale: 1.3,
    duration: 1.4,
    ease: "power3.out",
    delay: 0.6
  })

  // Fade up - buttons
  gsap.from(".dev-buttons-section", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.9
  })
}