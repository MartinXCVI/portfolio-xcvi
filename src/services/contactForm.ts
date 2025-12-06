import { FORM_COLORS } from "../constants/colors"
import { FORM_MESSAGES } from "../constants/messages"

/* Form submission handlers */

function handleSuccessMessage(data: any, response: Response, result: HTMLElement): void {
  result.style.visibility = "visible"
  result.innerHTML = data.message
  result.style.color = response.ok ? FORM_COLORS.success : FORM_COLORS.error
}

function handleErrorMessage(result: HTMLElement): void {
  result.style.visibility = "visible"
  result.innerHTML = FORM_MESSAGES.error
  result.style.color = FORM_COLORS.error
}

function handleClearMessage(result: HTMLElement): void {
  setTimeout(() => {
    result.innerHTML = ""
    result.style.visibility = "hidden"
    result.style.color = FORM_COLORS.neutral
  }, 5000)
}

document.addEventListener("DOMContentLoaded", (): void => {

  const form = document.getElementById("contact-form") as HTMLFormElement
  const result = document.querySelector(".result-msg") as HTMLParagraphElement
  const submitButton = document.querySelector(".send-btn") as HTMLButtonElement

  if(!form || !result) {
    console.error("Missing form elements.")
    return
  }

  form.addEventListener("submit", async (event: Event): Promise<void> => {
    event.preventDefault()

    // Disabling submit button to prevent double submissions
    if(submitButton) {
      submitButton.disabled = true
      submitButton.style.opacity = '0.6'
      submitButton.style.cursor = 'not-allowed'
    }

    const formData: FormData = new FormData(form);
    const object: Record<string, string> = Object.fromEntries(formData) as Record<string, string>
    const json: string = JSON.stringify(object);

    result.innerHTML = FORM_MESSAGES.loading

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: json,
      })

      if(!response.ok) {
        throw new Error(`HTTP error - status: ${response.status}`)
      }

      const data = await response.json()
      handleSuccessMessage(data, response, result)
    } catch(error) {
      if(error instanceof Error) {
        console.error("Error while submitting contact form:", error.message)
      } else {
        console.error("Error while submitting contact form:", error)
      }
      handleErrorMessage(result)
    } finally {
      form.reset()
      handleClearMessage(result)
      // Re-enable submit button
      if(submitButton) {
        submitButton.disabled = false
        submitButton.style.opacity = '1'
        submitButton.style.cursor = 'pointer'
      }
    }

  }) // End of form's submit event listener

})