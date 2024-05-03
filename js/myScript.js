"use strict";
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
document.getElementById("submitBtn").addEventListener("click", function () {
  let email = document.getElementById("emailInp").value;
  let result = email.match(regex);
  if (result != null) {
    document.getElementById("displayInfo").classList.toggle("hidden");
    document.getElementById("emailInp").classList.add("hidden");
    document.getElementById("submitBtn").classList.add("hidden");
    document.getElementById("labelP").classList.add("hidden");
  } else {
    alert("Không hợp lệ, yêu cầu nhập lại");
  }
});
// Start - Kinh nghiệm
const keiken = document.getElementById("keiken").childNodes[1];
const keikenInfo = document.getElementById("keikenInfo");
const keiBtn = document.getElementById("keibtnView");
keiken.addEventListener("mouseover", function () {
  keiBtn.classList.toggle("hidden");
});
keiBtn.addEventListener("click", function () {
  keikenInfo.classList.toggle("hidden");
  let btnName = document.querySelector(".btn-warning").textContent;
  if (btnName.includes("More")) {
    keiBtn.classList.remove("btnViewMore");
    keiBtn.classList.add("btnViewLess");
    keiBtn.innerHTML = `<button class="btn-warning">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <rect
        width="16"
        height="16"
        fill="currentColor"
        fill-opacity="50%"
      />
    </svg>
    View Less</button>`;
  } else {
    keiBtn.classList.remove("btnViewLess");
    keiBtn.classList.add("btnViewMore");
    keiBtn.innerHTML = `<button class="btn-warning">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <rect
        width="16"
        height="16"
        fill="currentColor"
        fill-opacity="50%"
      />
    </svg>
    View More</button>`;
  }
});
// End - Kinh nghiệm
// Start - Học vấn
const gaku = document.getElementById("gakureki").childNodes[1];
const gakuInfo = document.getElementById("gakurekiInfo");
const gakuBtn = document.getElementById("gakubtnView");
gaku.addEventListener("mouseover", function () {
  gakuBtn.classList.toggle("hidden");
});
gakuBtn.addEventListener("click", function () {
  gakuInfo.classList.toggle("hidden");
  let btnName = document.querySelector(
    "#gakubtnView >.btn-warning"
  ).textContent;
  if (btnName.includes("More")) {
    gakuBtn.classList.remove("btnViewMore");
    gakuBtn.classList.add("btnViewLess");
    gakuBtn.innerHTML = `<button class="btn-warning">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <rect
        width="16"
        height="16"
        fill="currentColor"
        fill-opacity="50%"
      />
    </svg>
    View Less</button>`;
  } else {
    gakuBtn.classList.remove("btnViewLess");
    gakuBtn.classList.add("btnViewMore");
    gakuBtn.innerHTML = `<button class="btn-warning">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <rect
        width="16"
        height="16"
        fill="currentColor"
        fill-opacity="50%"
      />
    </svg>
    View More</button>`;
  }
});
// End - Học vấn
// Start - Hoạt động
const katsudou = document.getElementById("katsudou").childNodes[1];
const katsudouInfo = document.getElementById("katsudouInfo");
const katsuBtn = document.getElementById("katsubtnView");
katsudou.addEventListener("mouseover", function () {
  katsuBtn.classList.toggle("hidden");
});
katsuBtn.addEventListener("click", function () {
  katsudouInfo.classList.toggle("hidden");
  let btnName = document.querySelector(
    "#katsubtnView >.btn-warning"
  ).textContent;
  if (btnName.includes("More")) {
    katsuBtn.classList.remove("btnViewMore");
    katsuBtn.classList.add("btnViewLess");
    katsuBtn.innerHTML = `<button class="btn-warning">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <rect
        width="16"
        height="16"
        fill="currentColor"
        fill-opacity="50%"
      />
    </svg>
    View Less</button>`;
  } else {
    katsuBtn.classList.remove("btnViewLess");
    katsuBtn.classList.add("btnViewMore");
    katsuBtn.innerHTML = `<button class="btn-warning">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <rect
        width="16"
        height="16"
        fill="currentColor"
        fill-opacity="50%"
      />
    </svg>
    View More</button>`;
  }
});
// End - Hoạt động
// Start - Sở thích
const shuumi = document.getElementById("shuumi").childNodes[1];
const shumiInfo = document.getElementById("shumiInfo");
const shumibtnView = document.getElementById("shumibtnView");
shuumi.addEventListener("mouseover", function () {
  shumibtnView.classList.toggle("hidden");
});
shumibtnView.addEventListener("click", function () {
  shumiInfo.classList.toggle("hidden");
  let btnName = document.querySelector(
    "#shumibtnView >.btn-warning"
  ).textContent;
  if (btnName.includes("More")) {
    shumibtnView.classList.remove("btnViewMore");
    shumibtnView.classList.add("btnViewLess");
    shumibtnView.innerHTML = `<button class="btn-warning">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <rect
        width="16"
        height="16"
        fill="currentColor"
        fill-opacity="50%"
      />
    </svg>
    View Less</button>`;
  } else {
    shumibtnView.classList.remove("btnViewLess");
    shumibtnView.classList.add("btnViewMore");
    shumibtnView.innerHTML = `<button class="btn-warning">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <rect
        width="16"
        height="16"
        fill="currentColor"
        fill-opacity="50%"
      />
    </svg>
    View More</button>`;
  }
});
// End - Sở thích
// Start - Ngôn ngữ
const gengo = document.getElementById("gengo").childNodes[1];
const gengoInfo = document.getElementById("gengoInfo");
const gengobtnView = document.getElementById("gengobtnView");
gengo.addEventListener("mouseover", function () {
  gengobtnView.classList.toggle("hidden");
});
gengobtnView.addEventListener("click", function () {
  gengoInfo.classList.toggle("hidden");
  let btnName = document.querySelector(
    "#gengobtnView >.btn-warning"
  ).textContent;
  if (btnName.includes("More")) {
    gengobtnView.classList.remove("btnViewMore");
    gengobtnView.classList.add("btnViewLess");
    gengobtnView.innerHTML = `<button class="btn-warning">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <rect
        width="16"
        height="16"
        fill="currentColor"
        fill-opacity="50%"
      />
    </svg>
    View Less</button>`;
  } else {
    gengobtnView.classList.remove("btnViewLess");
    gengobtnView.classList.add("btnViewMore");
    gengobtnView.innerHTML = `<button class="btn-warning">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <rect
        width="16"
        height="16"
        fill="currentColor"
        fill-opacity="50%"
      />
    </svg>
    View More</button>`;
  }
});
// End - Ngôn ngữ
// Start - Kỹ năng
const shugi = document.getElementById("shugi").childNodes[1];
const shugiInfo = document.getElementById("shugiInfo");
const shugibtnView = document.getElementById("shugibtnView");
shugi.addEventListener("mouseover", function () {
  shugibtnView.classList.toggle("hidden");
});
shugibtnView.addEventListener("click", function () {
  shugiInfo.classList.toggle("hidden");
  let btnName = document.querySelector(
    "#shugibtnView >.btn-warning"
  ).textContent;
  if (btnName.includes("More")) {
    shugibtnView.classList.remove("btnViewMore");
    shugibtnView.classList.add("btnViewLess");
    shugibtnView.innerHTML = `<button class="btn-warning">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <rect
        width="16"
        height="16"
        fill="currentColor"
        fill-opacity="50%"
      />
    </svg>
    View Less</button>`;
  } else {
    shugibtnView.classList.remove("btnViewLess");
    shugibtnView.classList.add("btnViewMore");
    shugibtnView.innerHTML = `<button class="btn-warning">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <rect
        width="16"
        height="16"
        fill="currentColor"
        fill-opacity="50%"
      />
    </svg>
    View More</button>`;
  }
});
// End - Kỹ năng
