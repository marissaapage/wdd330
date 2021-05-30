import { Hike } from "./hike.js";

//create an array of hikes
let hike1 = new Hike(
  "Bechler Falls",
  "falls.jpg",
  "Image of Bechler Falls",
  "3 miles",
  "Easy",
  "Beautiful short hike along the Bechler river to Bechler Falls",
  "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
);
let hike2 = new Hike(
  "Teton Canyon",
  "falls.jpg",
  "Image of Bechler Falls",
  "3 miles",
  "Easy",
  "Beautiful short (or long) hike through Teton Canyon.",
  "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
);
let hike3 = new Hike(
  "Denanda Falls",
  "falls.jpg",
  "Image of Bechler Falls",
  "7 miles",
  "Moderate",
  "Beautiful hike through Bechler meadows river to Denanda Falls",
  "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
);

let hikeList = [];
hikeList.push(hike1);
hikeList.push(hike2);
hikeList.push(hike3);

const imgBasePath = "//byui-cit.github.io/cit261/examples/";
//on load grab the array and insert it into the page
window.addEventListener("load", () => {
  showHikeList();
});

function showHikeList() {
  const hikeListElement = document.getElementById("hikes");
  hikeListElement.innerHTML = "";
  renderHikeList(hikeList, hikeListElement);
}

function renderHikeList(hikes, hikeListElement) {
  hikes.forEach((hike) => {
    hikeListElement.innerHTML += `<li>
      <h2>${hike.Name}</h2>
          <div class="image"><img src="${imgBasePath}${hike.ImgSrc}" alt="${hike.ImgAlt}"></div>
          <div>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.Distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.Difficulty}</p>
                  </div>
          </div>
        </li>`;
  });
}

// function addHikeListener(hike) {
//   let hikeElements = document.querySelector("ul").children;
//   hikeElements.forEach(
//     hike => {
//       hike.addEventListener()
//     }
//   )
// }
