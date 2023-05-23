// https://checkboxrace.com/

// Select all checkboxes.
const checkboxes = Array.from(document.querySelectorAll("input[type=checkbox]"));

// Set disabled to false and click it.
checkboxes.forEach((checkbox) => {
  checkbox.disabled = false;
  checkbox.click();
});
