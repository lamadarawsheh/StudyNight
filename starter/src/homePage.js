//DO NOT CHANGE ANYTHING IN THIS FILE//
// This file is responsible for loading the home page

const renderHomePage = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const header = createHeader("Study Night");
  main.appendChild(header);
};

const createHeader = (text) => {
  const h1 = document.createElement("h1");
  h1.textContent = text;
  return h1;
};

export { renderHomePage };
