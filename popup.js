// Get the modal

var modalparent = document.getElementsByClassName("modal_multi");

// Get the button that opens the modal

var modal_btn_multi = document.getElementsByClassName("myBtn_multi");

// Get the <span> element that closes the modal
var span_close_multi = document.getElementsByClassName("close_multi");

// When the user clicks the button, open the modal
function setDataIndex() {
  for (i = 0; i < modal_btn_multi.length; i++) {
    modal_btn_multi[i].setAttribute("data-index", i);
    modalparent[i].setAttribute("data-index", i);
    span_close_multi[i].setAttribute("data-index", i);
  }
}

for (i = 0; i < modal_btn_multi.length; i++) {
  modal_btn_multi[i].onclick = function () {
    var ElementIndex = this.getAttribute("data-index");
    modalparent[ElementIndex].style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span_close_multi[i].onclick = function () {
    var ElementIndex = this.getAttribute("data-index");
    modalparent[ElementIndex].style.display = "none";
  };
}

window.onload = function () {
  setDataIndex();
};

window.onclick = function (event) {
  if (event.target === modalparent[event.target.getAttribute("data-index")]) {
    modalparent[event.target.getAttribute("data-index")].style.display = "none";
  }

  // OLD CODE
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

//XXXXXXXXXXXXXXXXXXXXXXX    Modified old code    XXXXXXXXXXXXXXXXXXXXXXXXXX

// Get the modal

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = modal.getElementsByClassName("close")[0]; // Modified by dsones uk

// When the user clicks on the button, open the modal

btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
