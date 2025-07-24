document.addEventListener("DOMContentLoaded", () => {
  const modalBackdrop = document.getElementById("welcomeModalBackdrop")
  const okayButton = document.getElementById("welcomeModalOkayButton")

  // Check if the modal has been shown in this session
  // This ensures it only pops up once per browser session (until the tab is closed)
  if (sessionStorage.getItem("shownPopup") !== "true") {
    modalBackdrop.classList.add("show")
    // Set flag to prevent showing again in this session
    sessionStorage.setItem("shownPopup", "true")
  }

  function hideModal() {
    modalBackdrop.classList.remove("show")
  }

  // Event listener for the "Okay!" button
  if (okayButton) {
    okayButton.addEventListener("click", hideModal)
  }

  // Optional: Close modal if clicking outside of it
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (event) => {
      if (event.target === modalBackdrop) {
        hideModal()
      }
    })
  }
})
