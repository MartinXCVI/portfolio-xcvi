import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initContactAnimations(): void {

  gsap.fromTo(".contact-card-title", 
    {
      opacity: 0,
      x: -40
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-card-title",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  )

  gsap.fromTo(".contact-card-text", 
    {
      opacity: 0,
      x: 40
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-card-text",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  )

}