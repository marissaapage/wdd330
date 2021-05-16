const links = [
  {
    label: "Week1 notes",
    url: "/wdd330/week1/index.html",
  },
  {
    label: "Week2 notes",
    url: "/wdd330/week2/index.html",
  },
  {
    label: "Week3 notes",
    url: "/wdd330/week3/index.html",
  },
  {
    label: "Week4 notes",
    url: "/wdd330/week4/index.html",
  },
  {
    label: "Week5 notes",
    url: "/wdd330/week5/index.html",
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
