const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html",
  },
  {
    label: "Week2 notes",
    url: "week2/index.html",
  },
];

let navList = document.querySelector("#navList");

//for loop is good
//links.forEach() is better
links.forEach((link) => {
  navList.innerHTML += 
  `
    <li><a href="${link.url}">${link.label}</a></li> 
  `;
});
