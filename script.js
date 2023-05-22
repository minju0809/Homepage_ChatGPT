// // 토글 버튼 클릭 시 네비게이션 바 열고 닫기
// document.getElementById("toggleBtn").addEventListener("click", function() {
//   var navbar = document.getElementById("navbar");
//   navbar.classList.toggle("open");
// });

// 토글 버튼 클릭 시 네비게이션 바 열고 닫기
document.getElementById("toggleBtn").addEventListener("click", function() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("open");

  var isNavOpen = navbar.classList.contains("open");
  if (isNavOpen) {
      navbar.style.display = "flex";
  } else {
      navbar.style.display = "none";
  }
});

// 화면 크기 변경 시 토글 버튼 표시 여부 확인
window.addEventListener("resize", function() {
  var toggleBtn = document.getElementById("toggleBtn");
  var navbar = document.getElementById("navbar");
  var logo = document.getElementById("logo");

  if (window.innerWidth <= 768) {
      toggleBtn.style.display = "block";
      var isNavOpen = navbar.classList.contains("open");
      if (isNavOpen) {
          navbar.style.display = "flex";
      } else {
          navbar.style.display = "none";
      }
      logo.style.flex = "1";
  } else {
      toggleBtn.style.display = "none";
      navbar.style.display = "flex";
      logo.style.flex = "auto";
  }
});

// 초기 로딩 시 토글 버튼 표시 여부 확인
window.addEventListener("DOMContentLoaded", function() {
  var toggleBtn = document.getElementById("toggleBtn");
  var navbar = document.getElementById("navbar");
  var logo = document.getElementById("logo");

  if (window.innerWidth <= 768) {
      toggleBtn.style.display = "block";
      navbar.style.display = "none";
      logo.style.flex = "1";
  } else {
      toggleBtn.style.display = "none";
      navbar.style.display = "flex";
      logo.style.flex = "auto";
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var toggleBtn = document.getElementById("toggleBtn");
  var header = document.querySelector("header");
  var nav = document.createElement("nav");
  nav.id = "navbar";
  nav.innerHTML = `
      <ul>
          <li><a href="#">홈</a></li>
          <li><a href="#">소개</a></li>
          <li><a href="#">서비스</a></li>
          <li><a href="#">문의</a></li>
      </ul>
  `;
  header.appendChild(nav);

  toggleBtn.addEventListener("click", function() {
      header.classList.toggle("open");
  });
});
