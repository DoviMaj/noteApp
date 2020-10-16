// images event listeners
export const imagesEventListeners = () => {
  const images = document.querySelectorAll(".img");
  images.forEach((img) => {
    img.addEventListener("click", (evt) => {
      changeBackgroundImg(evt.target);
    });
  });
};

// changeBackgroundImg
const changeBackgroundImg = (img) => {
  const body = document.querySelector("body");
  body.style.background = `url(./img/img${img.id}.jpg) no-repeat fixed`;
  body.style.backgroundSize = "cover";
};
