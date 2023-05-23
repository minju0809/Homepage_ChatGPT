document.addEventListener("DOMContentLoaded", function () {
  var toggleBtn = document.getElementById("toggleBtn");
  var body = document.querySelector("body");

  toggleBtn.addEventListener("click", function () {
    body.classList.toggle("open-nav");
  });
});

// 공지사항 링크 요소 선택
const noticeLink = document.getElementById("noticeLink");
// 사진 링크 요소 선택
const photoLink = document.getElementById("photoLink");
// 체육관 찾기 링크 요소 선택
const gymLink = document.getElementById("gymLink");
// 상점 링크 요소 선택
const shopLink = document.getElementById("shopLink");
// 리뷰 링크 요소 선택
const reviewLink = document.getElementById("reviewLink");
// 마이페이지 링크 요소 선택
const myPageLink = document.getElementById("myPageLink");

// 공지사항 클릭 이벤트 핸들러
noticeLink.addEventListener("click", function () {
  // 'notice.html' 페이지로 이동
  window.location.href = "Notice/notice.html";
});

// 사진 클릭 이벤트 핸들러
photoLink.addEventListener("click", function () {
  // 'photo.html' 페이지로 이동
  window.location.href = "Photo/photo.html";
});

// 체육관 찾기 클릭 이벤트 핸들러
gymLink.addEventListener("click", function (event) {
  event.preventDefault(); // 기본 동작(링크 이동)을 막습니다.
  window.location.href = "FindGym/findGym.html"; // 이동할 HTML 파일의 경로를 설정합니다.
});

// 상점 클릭 이벤트 핸들러
shopLink.addEventListener("click", function (event) {
  event.preventDefault(); // 기본 동작(링크 이동)을 막습니다.
  window.location.href = "Shop/shop.html"; // 이동할 HTML 파일의 경로를 설정합니다.
});

// 리뷰 클릭 이벤트 핸들러
reviewLink.addEventListener("click", function () {
  // 'review.html' 페이지로 이동
  window.location.href = "Review/review.html";
});

// 마이페이지 클릭 이벤트 핸들러
myPageLink.addEventListener("click", function () {
  // 'mypage.html' 페이지로 이동
  window.location.href = "MyPage/myPage.html";
});
