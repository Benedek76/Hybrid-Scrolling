const stickySections = [...document.querySelectorAll(".sticky")];
let images = [
  "./img/saab1.webp",
  "./img/saab2.webp",
  "./img/saab3.webp",
  "./img/saab4.webp",
];

images.forEach((img) => {
  stickySections.forEach((section) => {
    let image = document.createElement("img");
    image.src = img;
    section.querySelector(".scroll_section").appendChild(image);
  });
});

window.addEventListener("scroll", (e) => {
  for (let i = 0; i < stickySections.length; i++) {
    transform(stickySections[i]);
  }
});

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  //console.log(offsetTop)
  const scrollSection = section.querySelector(`.scroll_section`);
  //console.log(scrollSection)
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
  scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
}
