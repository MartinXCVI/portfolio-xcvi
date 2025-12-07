import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Animation configurations for different card types
const cardAnimations = {
  webApp: { axis: "rotateY", from: -70 },
  website: { axis: "rotateY", from: 70 },
  backend: { axis: "rotateX", from: -70 }
}

// Reusable function for card animations
function animateCards(selector: string, config: { axis: string; from: number }): void {
  gsap.utils.toArray(selector).forEach((card, index) => {
    const fromProps = {
      opacity: 0,
      scale: 0.85,
      transformPerspective: 800,
      [config.axis]: config.from
    }

    const toProps = {
      opacity: 1,
      scale: 1,
      [config.axis]: 0,
      ease: "power3.out",
      duration: 1.1,
      scrollTrigger: {
        trigger: card as Element,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      delay: index * 0.12
    }

    gsap.fromTo(card as Element, fromProps, toProps)
  })
}

export function initPortfolioAnimations(): void {
  // Portfolio title
  gsap.fromTo(".portfolio-title",
    { opacity: 0, y: -40 },
    {
      opacity: 1, y: 0,
      duration: 1, ease: "power3.out",
      scrollTrigger: {
        trigger: ".portfolio-title",
        start: "top 75%",
        toggleActions: "play none none none"
      }
    }
  )

  // Projects titles - fade from left
  gsap.utils.toArray(".projects-title").forEach((title) => {
    gsap.fromTo(title as Element,
      { opacity: 0, x: -60 },
      {
        opacity: 1, x: 0,
        duration: 1, ease: "power2.out",
        scrollTrigger: {
          trigger: title as Element,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    )
  })

  // Animating different card types
  animateCards(".web-app-project-card", cardAnimations.webApp)
  animateCards(".website-project-card", cardAnimations.website)
  animateCards(".backend-project-card", cardAnimations.backend)
}
