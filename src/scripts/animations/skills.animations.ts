import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initSkillsAnimations():void {
  gsap.fromTo('.skills-section-title',
    {
      opacity: 0,
      y: -40
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skills-section-title",
        start: "top 75%",
        toggleActions: "play none none none"
      }
    }
  )

  // Projects titles - fade from left
  gsap.utils.toArray(".skills-section-subtitle").forEach((title, index): void => {
    gsap.fromTo(title as Element,
      {
        opacity: 0,
        x: -60
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title as Element,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        delay: (index % 3) * 0.25
      }
    )
  })

  gsap.utils.toArray(".skills-subcontainer").forEach((title, index): void => {
    gsap.fromTo(title as Element,
      {
        opacity: 0,
        x: 60
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title as Element,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        delay: (index % 3) * 0.25
      }
    )
  })

}