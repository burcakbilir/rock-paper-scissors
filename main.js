const resultUser = document.querySelector(".user-result img");
const resultGpu = document.querySelector(".gpu-result img");
const optionImages = document.querySelectorAll(".optionImages ");
const resultMsg = document.querySelector(".result");
const gameContainer = document.querySelector(".container");

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    const selectedImage = e.target.src;

    resultUser.src = selectedImage;

    const selectedRandom = Math.floor(Math.random() * 3);

    const imagesSrc = [
      "./images/icon-scissors.svg",
      "./images/icon-rock.svg",
      "./images/icon-paper.svg",
    ];

    resultGpu.src = imagesSrc[selectedRandom];

    const userInfo = ["P", "R", "S"][index];
    const gpuInfo = ["S", "R", "P"][selectedRandom];

    const resultInfo = {
      RR: "Draw",
      RP: "Gpu",
      RS: "User",
      PP: "Draw",
      PS: "Gpu",
      PR: "User",
      SS: "Draw",
      SR: "Gpu",
      SP: "User",
    };

    const gameResult = resultInfo[userInfo + gpuInfo];

    resultMsg.textContent =
      userInfo === gpuInfo ? "Match Draw" : `${gameResult} Won!`;
  });
});
