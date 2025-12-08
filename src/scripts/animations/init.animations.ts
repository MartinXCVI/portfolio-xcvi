import { initHeaderAnimations } from "./header.animations";
import { initLandingAnimations } from "./landing.animations";
import { initPortfolioAnimations } from "./portfolio.animations"
import { initSkillsAnimations } from "./skills.animations";
import { initAboutAnimations } from "./about.animations";
import { initContactAnimations } from "./contact.animations";

export function initAllAnimations(): void {
  initHeaderAnimations()
  initLandingAnimations()
  initPortfolioAnimations()
  initSkillsAnimations()
  initAboutAnimations()
  initContactAnimations()
}

initAllAnimations()