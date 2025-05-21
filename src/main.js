import './style.css';

class ButtonHandler {
  constructor(button) {
      this.button = button;
      this.isButtonTypeValid = this.button.type === "button";
      this.init();
  }

  init() {
      if (this.isButtonTypeValid) {
          this.button.addEventListener(
              "click",
              this.toggleAriaSelected.bind(this)
          );
      }
  }

  toggleAriaSelected() {
      const isSelected = this.button.getAttribute("aria-selected") === "true";
      this.button.setAttribute(
          "aria-selected",
          isSelected ? "false" : "true"
      );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn");
  button && new ButtonHandler(button);
});
