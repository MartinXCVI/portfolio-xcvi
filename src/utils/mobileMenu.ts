document.addEventListener("DOMContentLoaded", (): void => {

  /* Elements */
  const openBtn = document.querySelector('#open-menu') as HTMLButtonElement
  const closeBtn = document.querySelector('#close-menu') as HTMLButtonElement
  const navMenu = document.querySelector('.navigation') as HTMLElement
  const navList = document.querySelector('.nav-list') as HTMLElement
  const navLinks = document.querySelectorAll('.nav-item .nav-link') as NodeListOf<HTMLAnchorElement>

  if(!openBtn || !closeBtn || !navMenu || !navList || !navLinks.length) {
    console.error("Critial navigation elements are missing.")
    return
  }

  /* Declarations */
  const DESKTOP_BREAKPOINT = 991

  /* Accessibility logic */
  function setLinkFocusability(enabled: boolean): void {
    // Toggling tabindex on all navigation links
    navLinks.forEach(link => {
      link.tabIndex = enabled ? 0 : -1
    })
  }

  function setAria(isOpen: boolean): void {
    // Setting attributes and styles on menu toggle
    navList.setAttribute("aria-hidden", isOpen ? "false" : "true")
    openBtn.setAttribute("aria-expanded", isOpen.toString())
    closeBtn.setAttribute("aria-expanded", isOpen.toString())
  }

  /* Menu toggle on mobile */
  function toggleMenu(isOpen: boolean): void {
    // Setting ARIA attributes
    setAria(isOpen)
    // Updating focusability
    setLinkFocusability(isOpen)
    // Applying CSS classes
    navList.classList.toggle("menu-hidden", !isOpen)
    openBtn.classList.toggle("open-menu-hidden",  isOpen)
    openBtn.classList.toggle("open-menu-visible", !isOpen)
    closeBtn.classList.toggle("close-button-visible", isOpen)
    closeBtn.classList.toggle("close-button-hidden", !isOpen)

    // Focus management
    setTimeout((): void => {
      isOpen ? closeBtn.focus() : openBtn.focus()
    }, 50)
  }

  /* Desktop reset (No menu toggle animation) */
  function applyDesktopState(): void {
    navList.classList.remove("menu-hidden")
    navList.removeAttribute("aria-hidden")
    setLinkFocusability(true)
  }

  function applyMobileClosedState(): void {
    toggleMenu(false)
  }

  /* Initial load state */
  function applyInitialState(): void {
    const isDesktop = window.innerWidth > DESKTOP_BREAKPOINT

    isDesktop ? applyDesktopState() : applyMobileClosedState()
  }

  applyInitialState()

  /* EVENT LISTENERS */

  // Opening the nav menu
  openBtn.addEventListener("click", (): void => toggleMenu(true))

  // Closing the nav menu
  closeBtn.addEventListener("click", (): void => toggleMenu(false))

  // Escape key support: Allowing users to close the menu with the 'Esc' key:
  document.addEventListener('keydown', (event): void => {
    if(event.key === "Escape" && navList?.getAttribute('aria-hidden') === 'false') {
      toggleMenu(false)
    }
  })

  // Closing the nav menu when a link is clicked
  navLinks.forEach((link): void => {
    link.addEventListener("click", (): void => {
      toggleMenu(false)
    })
  })

  // Adaptation to viewport changes
  window.addEventListener("resize", (): void => {
    const isDesktop = window.innerWidth > DESKTOP_BREAKPOINT

    isDesktop ? applyDesktopState() : applyMobileClosedState()
  })

})