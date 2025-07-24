document.addEventListener("DOMContentLoaded", () => {
  const modalBackdrop = document.getElementById("welcomeModalBackdrop")
  const okayButton = document.getElementById("welcomeModalOkayButton")

  // Check if the popup has already been shown in this session
  if (sessionStorage.getItem("popupShown") !== "true") {
    if (modalBackdrop) {
      modalBackdrop.classList.add("show")
      // Set the flag immediately so it doesn't show again on subsequent page loads in the same session
      sessionStorage.setItem("popupShown", "true")
    }
  }

  function hideModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove("show")
    }
  }

  // Event listener for the "Okay!" button
  if (okayButton) {
    okayButton.addEventListener("click", hideModal)
  }

  // Event listener for clicking outside the modal
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (event) => {
      if (event.target === modalBackdrop) {
        hideModal()
      }
    })
  }
})
