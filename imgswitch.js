function switchGameConsole() {
  const imageElement = document.getElementById("gameConsole");
  const images = ["./images/ps5sale1.JPG", "./images/ps5sale2.JPG"];
  let index = 0;
  imageElement.src = images[index];
  setInterval(() => {
    index = (index + 1) % images.length;
    imageElement.src = images[index];
  }, 3000);
}

function switchLaptopSales() {
  const imageElement = document.getElementById("laptopsales");
  const images = ["./images/macsales.JPG", "./images/lapsales1.JPG"];
  let index = 0;
  imageElement.src = images[index];
  setInterval(() => {
    index = (index + 1) % images.length;
    imageElement.src = images[index];
  }, 3000);
}

function switchAccessories() {
  const imageElement = document.getElementById("accessories");
  const images = [
    "./images/pad.JPG",
    "./images/iwatch2.JPG",
    "./images/watch2.JPG",
    "./images/earbuds.JPG",
    "./images/jbl.JPG",
  ];
  let index = 0;
  imageElement.src = images[index];
  setInterval(() => {
    index = (index + 1) % images.length;
    imageElement.src = images[index];
  }, 3000);
}

function switchPhones() {
  const imageElement = document.getElementById("phones");
  const images = [
    "./images/samsungsale.JPG",
    "./images/iphonesale1.JPG",
    "./images/iphonesale2.JPG",
  ];
  let index = 0;
  imageElement.src = images[index];
  setInterval(() => {
    index = (index + 1) % images.length;
    imageElement.src = images[index];
  }, 3000);
}

function switchLaptopRepair() {
  const imageElement = document.getElementById("laptoprepair");
  const images = ["./images/laptoprepair1.JPG", "./images/laptoprepair2.JPG"];
  let index = 0;
  imageElement.src = images[index];
  setInterval(() => {
    index = (index + 1) % images.length;
    imageElement.src = images[index];
  }, 3000);
}

window.onload = function () {
  switchGameConsole();
  switchLaptopSales();
  switchAccessories();
  switchPhones();
  switchLaptopRepair();
};
