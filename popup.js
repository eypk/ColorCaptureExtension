// constants
const color = document.getElementById("input");
const p1 = document.getElementById("colorCode");
const p2 = document.getElementById("result");
const CopyButton = document.getElementById("copyColorClipboard");

// select color & change background
color.addEventListener("input", (e) => {
  console.log(e.target.value);

  // document.body.style.backgroundColor = e.target.value;
  document.getElementById("colorCode").style.backgroundColor = e.target.value;

  p1.innerHTML = e.target.value;
  p2.innerHTML = "Color Code Captured!..";
});

// copy color code to clipboard
CopyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(
    document.getElementById("colorCode").textContent
  );
  //copy button messages
  if (p1.textContent.startsWith("#")) {
    p2.innerHTML = "Copied! Now, You can paste HEX color code...";
  } else {
    p2.innerHTML = "Error: Please pick a color!...";
  }
});
