// Fonction pour fermer tous les accordéons
function accordionClose() {
  document.getElementById("accordion1").classList.add("hidden");
  document.getElementById("accordion2").classList.add("hidden");
  document.getElementById("accordion3").classList.add("hidden");
  document.getElementById("accordion4").classList.add("hidden");
  document.getElementById("accordion5").classList.add("hidden");
  document.getElementById("accordion6").classList.add("hidden");
  document.getElementById("accordion7").classList.add("hidden");
}

document.getElementById("btn1").addEventListener("click", function () {
  if (document.getElementById("accordion1").classList.contains("hidden")) {
    accordionClose();
    document.getElementById("accordion1").classList.remove("hidden");
  } else {
    document.getElementById("accordion1").classList.add("hidden");
  }
});

document.getElementById("btn2").addEventListener("click", function () {
  if (document.getElementById("accordion2").classList.contains("hidden")) {
    accordionClose();
    document.getElementById("accordion2").classList.remove("hidden");
  } else {
    document.getElementById("accordion2").classList.add("hidden");
  }
});

document.getElementById("btn3").addEventListener("click", function () {
  if (document.getElementById("accordion3").classList.contains("hidden")) {
    accordionClose();
    document.getElementById("accordion3").classList.remove("hidden");
  } else {
    document.getElementById("accordion3").classList.add("hidden");
  }
});
document.getElementById("btn4").addEventListener("click", function () {
  if (document.getElementById("accordion4").classList.contains("hidden")) {
    accordionClose();
    document.getElementById("accordion4").classList.remove("hidden");
  } else {
    document.getElementById("accordion4").classList.add("hidden");
  }
});
document.getElementById("btn5").addEventListener("click", function () {
  if (document.getElementById("accordion5").classList.contains("hidden")) {
    accordionClose();
    document.getElementById("accordion5").classList.remove("hidden");
  } else {
    document.getElementById("accordion5").classList.add("hidden");
  }
});
document.getElementById("btn6").addEventListener("click", function () {
  if (document.getElementById("accordion6").classList.contains("hidden")) {
    accordionClose();
    document.getElementById("accordion6").classList.remove("hidden");
  } else {
    document.getElementById("accordion6").classList.add("hidden");
  }
});
document.getElementById("btn7").addEventListener("click", function () {
  if (document.getElementById("accordion7").classList.contains("hidden")) {
    accordionClose();
    document.getElementById("accordion7").classList.remove("hidden");
  } else {
    document.getElementById("accordion7").classList.add("hidden");
  }
});
