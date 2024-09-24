//TODO
//Note: You will not be able to run parcel without first fixing these errors
// Check for ESLint errors and format with Prettier.
// This file contains a number of helper functions that create DOM elements.
// These functions help prevent code repetition.
// While the functions are mostly correct, there are some errors.
// Use ESLint to identify the errors and Prettier to format the code.

// Create a header element with specified text and data attribute
var createHeader = (headerType, text, dataCy) => {
  var header = document.createElement(headerType);
  header.textContent = text;
  header.setAttribute("data-cy", dataCy)
  return header
};

// Create a button that toggles the visibility of the form
const createToggleButton = (text, element) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", () => {element.classList.toggle("notVisible")});

  return button;
};

// Form Helper Functions

// Helper function to create a label element
const createLabel = (text, htmlFor) => {
  var label = document.createElement("label");
  label.textContent = text
  label.setAttribute("for", htmlFor);
  return label;
};

// Helper function to create an input element
const createInput = (name) => {
  const input = document.createElement("input");
  input.name = name;
  input.id = name
  return input;
};

const createSubmitButton = (value) => {
  const submit = document.createElement("input");
  submit.type = "submit";
  submit.value = value;
  return submit
};

export {createHeader, createToggleButton, createLabel,createInput,createSubmitButton,
}
