const topLeftInput = document.getElementById("top-left");
const topRightInput = document.getElementById("top-right");
const bottomRightInput = document.getElementById("bottom-right");
const bottomLeftInput = document.getElementById("bottom-left");
const box = document.getElementById("box");

function setBorderRadius() {
    const topLeft = topLeftInput.value;
    const topRight = topRightInput.value;
    const bottomRight = bottomRightInput.value;
    const bottomLeft = bottomLeftInput.value;
    
    box.style.borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
    updatePreviewText();
  }
  

topLeftInput.addEventListener("input", setBorderRadius);
topRightInput.addEventListener("input", setBorderRadius);
bottomRightInput.addEventListener("input", setBorderRadius);
bottomLeftInput.addEventListener("input", setBorderRadius);


function updatePreviewText() {
    const topLeft = topLeftInput.value;
    const topRight = topRightInput.value;
    const bottomRight = bottomRightInput.value;
    const bottomLeft = bottomLeftInput.value;
    
    const borderRadiusOutput = document.getElementById("border-radius-output");
    borderRadiusOutput.textContent = `border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px;`;
  }
  

