$(document).ready(function () {
  //왼쪽 메뉴 호버
  $("nav li").hover(
    function () {
      $(this).children("nav").stop().slideDown();
    },
    function () {
      $(this).children("nav").stop().slideUp();
    }
  ); //메뉴 호버 끝

  //왼쪽으로 슬라이드 (자동)
  setInterval(toLeft, 2800);
  function toLeft() {
    $("#slide")
      .stop()
      .animate({ left: "-100%" }, 1200, function () {
        $("#slide").append($("#slide a").eq(0));
        $("#slide").css("left", "0");
      });
  }
  //슬라이드 끝

  //공지사항 첫번째 텍스트 클릭시 팝업 모달
  $(".pop").click(function () {
    $("#popup").fadeIn();
  });

  //팝업 모달 '닫기'버튼 클릭시
  $("#popup button").click(function () {
    $("#popup").fadeOut();
  });
}); ////end
