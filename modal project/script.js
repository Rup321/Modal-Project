const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openmodal = () => {
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

// Modal close function
const closemodal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};