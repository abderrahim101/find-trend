// import bigjson from "/bestjs.json" assert { type: "json" };
// console.log(typeof bigjson);

// let datenow = new Date();
// console.log("copyrighte " + datenow.getFullYear());

document.addEventListener("click", (e) => {
  if (
    e.target.className === "plf" ||
    e.target.getAttribute("alt") === "plf-img"
  ) {
    let al = document.querySelectorAll(".plf");
    al.forEach((el) => {
      el.removeAttribute("id");
    });
    if (e.target.getAttribute("alt") === "plf-img") {
      e.target.parentNode.setAttribute("id", "active");
    } else {
      e.target.setAttribute("id", "active");
    }
  }
});
document.querySelectorAll(".big-card").forEach((n) => {
  n.addEventListener("click", (e) => {
    if (e.target.classList.contains("big-card")) {
      let al = document.querySelectorAll(".big-card");
      al.forEach((el) => {
        el.removeAttribute("id");
      });

      e.target.setAttribute("id", "act");
    }
  });
});

document.querySelector(".tog").addEventListener("click", (e) => {
  if (e.target.id === "off") {
    e.target.parentNode.id = "click";
    document
      .querySelector(".yer")
      .classList.replace("text-white-50", "text-white");
    document
      .querySelector(".mon")
      .classList.replace("text-white", "text-white-50");
    e.target.id = "on";
    priceChanger("on");
  } else if (e.target.id === "on") {
    e.target.id = "off";
    e.target.parentNode.id = "nclick";
    document
      .querySelector(".yer")
      .classList.replace("text-white", "text-white-50");
    document
      .querySelector(".mon")
      .classList.replace("text-white-50", "text-white");
    priceChanger("off");
  }
});

function priceChanger(state) {
  if (state === "on") {
    document.querySelector(".per h5").textContent = "30$";
    document.querySelector(".reg h5").textContent = "60$";
    document.querySelector(".pro h5").textContent = "120$";
  } else if (state === "off") {
    document.querySelector(".per h5").textContent = "8$";
    document.querySelector(".reg h5").textContent = "20$";
    document.querySelector(".pro h5").textContent = "48$";
  }
}
