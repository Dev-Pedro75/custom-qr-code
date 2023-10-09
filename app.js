const dotOptionsSelect = document.querySelector("#dotOptionsSelect");
const dotOptionsSelectColor = document.querySelector("#dotOptionsSelectColor");
const generateButton = document.querySelector("#generate-button");
const canvasContainer = document.querySelector("#canvas");
const qrCodeOptions = {
  data: "https://gravityonplanets.netlify.app",
  dotOptionsSelect: {
    color: "#000000",
    type: "square",
  },
  backgroundOptionsSelect: "#ffffff",
  imageSelect: "",
  cornersSquareOptionsSelect: {
    color: "#000000",
    type: "square",
  },
  cornersDotOptionsSelect: {
    type: "square",
    color: "#000000",
  },
};

function changeSelect(element, option) {
  if (option == "data") {
    qrCodeOptions.data = element.value;
  }
  if (option == "dotOptionsSelectType") {
    qrCodeOptions.dotOptionsSelect.type = element.value;
  }
  if (option == "dotOptionsSelectColor") {
    qrCodeOptions.dotOptionsSelect.color = element.value;
  }
  if (option == "cornersSquareOptionsSelectType") {
    qrCodeOptions.cornersSquareOptionsSelect.type = element.value;
  }
  if (option == "cornersSquareOptionsSelectColor") {
    qrCodeOptions.cornersSquareOptionsSelect.color = element.value;
  }
}

generateButton.addEventListener("click", () => {
  const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    data: qrCodeOptions.data,
    margin: 0,
    qrOptions: { typeNumber: "0", mode: "Byte", errorCorrectionLevel: "Q" },
    imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 },
    dotsOptions: {
      type: qrCodeOptions.dotOptionsSelect.type,
      color: qrCodeOptions.dotOptionsSelect.color,
    },
    backgroundOptions: { color: qrCodeOptions.backgroundOptionsSelect },
    image: qrCodeOptions.imageSelect,
    dotsOptionsHelper: {
      colorType: { single: true, gradient: false },
      gradient: {
        linear: true,
        radial: false,
        color1: "#6a1a4c",
        color2: "#6a1a4c",
        rotation: "0",
      },
    },
    cornersSquareOptions: {
      type: qrCodeOptions.cornersSquareOptionsSelect.type,
      color: qrCodeOptions.cornersSquareOptionsSelect.color,
    },
    cornersSquareOptionsHelper: {
      colorType: { single: true, gradient: false },
      gradient: {
        linear: true,
        radial: false,
        color1: "#000000",
        color2: "#000000",
        rotation: "0",
      },
    },

    cornersDotOptions: {
      type: qrCodeOptions.cornersDotOptionsSelect.type,
      color: qrCodeOptions.cornersDotOptionsSelect.color,
    },
    cornersDotOptionsHelper: {
      colorType: { single: true, gradient: false },
      gradient: {
        linear: true,
        radial: false,
        color1: "#000000",
        color2: "#000000",
        rotation: "0",
      },
    },
    backgroundOptionsHelper: {
      colorType: { single: true, gradient: false },
      gradient: {
        linear: true,
        radial: false,
        color1: "#ffffff",
        color2: "#ffffff",
        rotation: "0",
      },
    },
  });

  if (canvasContainer.childElementCount) {
    canvasContainer.removeChild(canvasContainer.firstChild);
  }
  qrCode.append(canvasContainer);
});
