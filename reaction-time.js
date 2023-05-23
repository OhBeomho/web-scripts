// https://simritest.com/reaction

const clickbox = document.querySelector(".reaction-screen");
const observer = new MutationObserver((mutationList) => {
  for (let mutation of mutationList) {
    if (
      mutation.type === "attributes" &&
      mutation.attributeName === "class" &&
      mutation.target.classList.contains("reaction-click")
    ) {
      mutation.target.click();
    }
  }
});

observer.observe(clickbox, { attributes: true });
