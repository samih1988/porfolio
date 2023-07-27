// ########################     text writer     #################
var span = document.querySelector(".typewriter span");
var textArr = span.getAttribute("data-text").split(", ");
var maxTextIndex = textArr.length;

var sPerChar = 0.15;
var sBetweenWord = 1.5;
var textIndex = 0;

typing(textIndex, textArr[textIndex]);

function typing(textIndex, text) {
  var charIndex = 0;
  var maxCharIndex = text.length - 1;

  var typeInterval = setInterval(function () {
    span.innerHTML += text[charIndex];
    if (charIndex == maxCharIndex) {
      clearInterval(typeInterval);
      setTimeout(function () {
        deleting(textIndex, text);
      }, sBetweenWord * 1000);
    } else {
      charIndex += 1;
    }
  }, sPerChar * 1000);
}

function deleting(textIndex, text) {
  var minCharIndex = 0;
  var charIndex = text.length - 1;

  var typeInterval = setInterval(function () {
    span.innerHTML = text.substr(0, charIndex);
    if (charIndex == minCharIndex) {
      clearInterval(typeInterval);
      textIndex + 1 == maxTextIndex ? (textIndex = 0) : (textIndex += 1);
      setTimeout(function () {
        typing(textIndex, textArr[textIndex]);
      }, sBetweenWord * 1000);
    } else {
      charIndex -= 1;
    }
  }, sPerChar * 1000);
}
// ####################################################### color on side #####
let iconcolor = document.querySelector(".icon-color");
let slidcolor = document.querySelector(".slidicon");

let liul = Array.from(document.querySelectorAll(".ul-color li"));
let menucolor = document.querySelector(".menu-color");

slidcolor.onclick = () => {
  iconcolor.classList.toggle("translateright");
  document.getElementById("ger").classList.toggle("fa-spin");
  // $(".fa-gear").toggleClass("fa-spin");
};

// add to locla storage
let mincolor = localStorage.getItem("color-option");
if (mincolor != null) {
  document.documentElement.style.setProperty("--main-color", mincolor);
}
for (let i = 0; i < liul.length; i++) {
  liul[i].onclick = function () {
    remov();
    this.classList.add("active");
    document.documentElement.style.setProperty(
      "--main-color",
      this.getAttribute("data-color")
    );
    localStorage.setItem("color-option", this.getAttribute("data-color"));
  };
}
function remov() {
  liul.forEach((el) => {
    el.classList.remove("active");
  });
}
// ################################## counter
$(document).ready(function () {
  let strted = false;
  let val = $(".count-div").offset().top - window.innerHeight;

  $(window).scroll(function () {
    if ($(window).scrollTop() > val + 300) {
      if (!strted) {
        // ########## counter1 #################
        con = 0;
        goal = $(".counter1").attr("data-max");
        sh = setInterval(function () {
          $(".counter1").text(con + "+");
          con++;
          if (con > goal) {
            clearInterval(sh);
          }
        }, 2000 / goal);
        // ############################################
        // ########## counter2 #################
        con2 = 0;
        goal2 = $(".counter2").attr("data-max");
        sh2 = setInterval(function () {
          $(".counter2").text(con2 + "+");
          con2++;
          if (con2 > goal2) {
            clearInterval(sh2);
          }
        }, 2000 / goal2);

        // ########## counter3 #################
        con3 = 0;
        goal3 = $(".counter3").attr("data-max");
        sh3 = setInterval(function () {
          $(".counter3").text(con3 + "+");
          con3++;
          if (con3 > goal3) {
            clearInterval(sh3);
          }
        }, 2000 / goal3);
        // ########## counter4 #################
      }
      strted = true;
    }
  });
  // ########    gallery page   #####################

  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");
    $(this).addClass("acti").siblings().removeClass("acti");

    if (value == "all") {
      // $(".filter").show("1000");
      $(".filter").show("3000");
      $(".item4").addClass("top");
      $(".item7").addClass("mart");
      $(".item2").removeClass("mart");
      $(".item4").removeClass("mart");
    } else {
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
      $(".item4").removeClass("top");
      $(".item4").addClass("mart");
      $(".item7").removeClass("mart");
      $(".item2").addClass("mart");
    }
  });

  // #############################3 end of jquery
});

// ########################     when scrol nav color changee     ###########################
let sections = document.querySelectorAll("section");
let navlink = document.querySelectorAll(".nav-link");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 300;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navlink.forEach((links) => {
        links.classList.remove("activ");
        document
          .querySelector(".nav-link[href*=" + id + "]")
          .classList.add("activ");
      });
    }
  });
};
