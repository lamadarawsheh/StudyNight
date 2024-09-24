const cardSets = [
  {
    id: 1,
    title: "Web Dev Flash Cards",
    cards: [
      { term: "HTML", description: "HyperText Markup Language" },
      { term: "CSS", description: "Cascading Style Sheets " },
      {
        term: "element",
        description:
          "HTML Tags that make up the HTML documents. <h1>, <div>, <p>",
      },
      {
        term: "Attribute",
        description:
          "Properties that are added to an HTML element. src, href, id, class",
      },
      {
        term: "<h1>",
        description: "Headline tag, the largest and most important.",
      },
      {
        term: "<a>",
        description: "Anchor Tag used for hyperlinks",
      },
      {
        term: "class",
        description:
          "html attribute used on to identify multiple elements. Is used as a selector for styles and JavaScript",
      },
      {
        term: "selector",
        description:
          "Used to select elements on a page, can be elements using the tag name, id using a # or class using a . ",
      },
      {
        term: "Box Model",
        description: "Layout tool with margin, padding and borders",
      },
    ],
  },
  {
    id: 2,
    title: "Cloud Certification Flash Cards",
    cards: [
      {
        term: "Continuous Integration",
        description: "Automated build tests run during merge",
      },
      { term: "Microservices", description: "Small single purpose services" },
    ],
  },
];
export { cardSets };
