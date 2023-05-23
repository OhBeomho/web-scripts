// https://clickspeedtest.com/

const clickbox = document.getElementById("clicker");
const interval = setInterval(() => {
  for (let i = 0; i < 1000; i++) {
    clickbox.dispatchEvent(new MouseEvent("mousedown"));
  }
}, 1);
const observer = new MutationObserver((mutationList) => {
  for (let mutation of mutationList) {
    if (
      mutation.type === "attributes" &&
      mutation.attributeName === "style" &&
      mutation.target.style.display === "none"
    ) {
      clearInterval(interval);
    }
  }
});

observer.observe(clickbox, { attributes: true });
