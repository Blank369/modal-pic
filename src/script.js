// Get the modal
var content = document.getElementById("app");
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById("myImg");
var imgs = document.querySelectorAll("img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

imgs.forEach((img) => {
  img.addEventListener("click", handleClick);
});

function handleClick(event) {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  content.style.filter = "blur(10px)";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  closeModal();
};

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

var closeModal = function () {
  modal.style.display = "none";
  content.style.filter = "none";

  modalImg.style.transform =
    modalImg.style.WebkitTransform =
    modalImg.style.MsTransform =
      "scale(1)";
};

modalImg.addEventListener("mousewheel", function (event) {
  const delta = event.deltaY;

  if (delta > 0) {
    modalImg.style.transform =
      modalImg.style.WebkitTransform =
      modalImg.style.MsTransform =
        "scale(1.5)";
  } else {
    modalImg.style.transform =
      modalImg.style.WebkitTransform =
      modalImg.style.MsTransform =
        "scale(0.5)";
  }

  event.preventDefault();
});
