// images event listeners
export const imagesEventListeners = () => {
  let images = document.querySelectorAll(".img");
  images.forEach((img) => {
    img.addEventListener("click", (evt) => {
      changeBackgroundImg(evt.target);
    });
  });
};

// changeBackgroundImg
const changeBackgroundImg = (img) => {
  let body = document.querySelector("body");
  body.style.background = `url(./img/img${img.id}.jpg) no-repeat fixed`;
  body.style.backgroundSize = "cover";
};
