import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initAboutAnimations(): void {

  gsap.fromTo(".about-card-title", 
    {
      opacity: 0,
      y: -40
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-card-title",
        start: "top 75%",
        toggleActions: "play none none none"
      }
    }
  )

  gsap.fromTo(".about-article", 
    {
      opacity: 0,
      x: 50
    },
    {
      opacity: 1,
      x: 0,
      duration: 1.2,
      delay: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-card-title",
        start: "top 75%",
        toggleActions: "play none none none"
      }
    }
  )

  gsap.fromTo(".about-btns-div",
    {
      opacity: 0,
      x: -50
    },
    {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.9,
      scrollTrigger: {
        trigger: ".about-card-title",
        start: "top 75%",
        toggleActions: "play none none none"
      }
    }
  )

}