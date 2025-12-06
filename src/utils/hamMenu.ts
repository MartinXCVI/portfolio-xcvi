document.addEventListener("DOMContentLoaded", (): void => {

  /* Declarations */
  const openBtn = document.querySelector('#open-menu') as HTMLButtonElement
  const closeBtn = document.querySelector('#close-menu') as HTMLButtonElement
  const navMenu = document.querySelector('.navigation') as HTMLElement
  const navList = document.querySelector('.nav-list') as HTMLElement
  const navLinks = document.querySelectorAll('.nav-item .nav-link') as NodeListOf<HTMLAnchorElement>

  if(!openBtn || !closeBtn || !navMenu || !navList || !navLinks) {
    console.error("Critial navigation elements are missing.")
    return
  }

  function toggleMenu(isOpen: boolean): void {
    if(navMenu && closeBtn && openBtn && navList) {
      // Setting attributes and styles on menu toggle
      navMenu.setAttribute("aria-hidden", isOpen ? "false" : "true")
      navList.setAttribute("aria-hidden", isOpen ? "false" : "true")
      openBtn.setAttribute("aria-expanded", isOpen.toString())

      console.log(isOpen)
      if(isOpen) {
        navList.classList.remove("menu-hidden")
        openBtn.classList.add("open-menu-hidden")
        openBtn.classList.remove("open-menu-visible")
        closeBtn.classList.add("close-button-visible")
        closeBtn.classList.remove("close-button-hidden")
      } else {
        navList.classList.add("menu-hidden")
        openBtn.classList.remove("open-menu-hidden")
        openBtn.classList.add("open-menu-visible")
        closeBtn.classList.add("close-button-hidden")
        closeBtn.classList.remove("close-button-visible")
      }

      /* Toggling tabindex on all navigation links */
      // When menu is closed, set tabindex to -1 (removes from tab order)
      // When menu is open, set tabindex to 0 (adds to tab order)
      navLinks.forEach(link => {
        link.tabIndex = isOpen ? 0 : -1
      })

      /* Focus management */
      if(isOpen) {
        setTimeout((): void => closeBtn.focus(), 100) // focus on close button when menu opens
      } else {
        setTimeout((): void => openBtn.focus(), 100) // focus back to hamburger button when menu closes
      }
   
    }
  }

  // Initial state on page load
  const isDesktop = window.innerWidth > 991
  if(!isDesktop) {
    toggleMenu(false) // Start with menu closed on mobile
  } else {
    // On desktop, keeping links focusable but mobile menu elements hidden
    navLinks.forEach(link => {
      link.tabIndex = 0 // Always focusable on desktop
    })
  }

  /* EVENT LISTENERS */
  // Opening the nav menu
  openBtn.addEventListener("click", ():void => toggleMenu(true))
  // Closing the nav menu
  closeBtn.addEventListener("click", (): void => toggleMenu(false))
  // Escape key support: Allowing users to close the menu with the 'Esc' key:
  document.addEventListener('keydown', (event): void => {
    if(event.key === "Escape" && navMenu?.getAttribute('aria-hidden') === 'false') {
      toggleMenu(false)
    }
  })

})