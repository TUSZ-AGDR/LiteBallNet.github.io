// The repository remains private until paper acceptance. Its buttons are
// rendered in a disabled state in index.html.
const REPOSITORY_URL = "https://github.com/TUSZ-AGDR/LiteBallNet";

document.querySelectorAll("[data-repository-link]").forEach((link) => {
  link.href = REPOSITORY_URL;
});

const sports = {
  tennis: {
    title: "Tennis",
    score: "95.17%",
    file: "assets/videos/tennis_demo.mp4",
    poster: "assets/posters/tennis_demo_poster.png",
  },
  badminton: {
    title: "Badminton",
    score: "93.61%",
    file: "assets/videos/badminton_demo.mp4",
    poster: "assets/posters/badminton_demo_poster.png",
  },
  "table-tennis": {
    title: "Table tennis",
    score: "98.59%",
    file: "assets/videos/table_tennis_demo.mp4",
    poster: "assets/posters/table_tennis_demo_poster.png",
  },
};

const tabs = [...document.querySelectorAll(".sport-tab")];
const video = document.querySelector("#demo-video");
const fallback = document.querySelector("#video-fallback");
const fallbackPoster = document.querySelector("#fallback-poster");
const title = document.querySelector("#demo-title");
const score = document.querySelector("#demo-score");

function activateSport(key, focusTab = false) {
  const sport = sports[key];
  if (!sport || !video) return;

  tabs.forEach((tab) => {
    const active = tab.dataset.sport === key;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active && focusTab) tab.focus();
  });

  title.textContent = sport.title;
  score.textContent = sport.score;
  fallbackPoster.src = sport.poster;
  fallbackPoster.alt = `Representative frame from the ${sport.title.toLowerCase()} tracking output`;
  fallback.hidden = true;
  video.hidden = false;
  video.pause();
  video.poster = sport.poster;
  video.src = sport.file;
  video.setAttribute("aria-label", `${sport.title} tracking output`);
  video.load();

  video.onerror = () => {
    video.hidden = true;
    fallback.hidden = false;
  };
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateSport(tab.dataset.sport));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
    event.preventDefault();
    const delta = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
    const next = (index + delta + tabs.length) % tabs.length;
    activateSport(tabs[next].dataset.sport, true);
  });
});

activateSport("tennis");
