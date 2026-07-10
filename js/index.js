// ハンバーガーボタン
$("#js-button-drawer").on("click", function () {
  $(this).toggleClass("is-checked");
  $("#js-drawer").slideToggle();
  $("body").toggleClass("is-fixed");
});

// 固定ヘッダー分の高さ
const headerHeight = 81;

// ナビリンク
$(".header__nav-link").on("click", function (e) {
  const href = $(this).attr("href");

  // 外部ページ・別ページは通常遷移
  if (!href || !href.startsWith("#")) return;

  e.preventDefault();

  const position =
    $(href).offset().top - ($(window).width() < 1200 ? headerHeight : 0);

  $("html, body").animate(
    {
      scrollTop: position,
    },
    500,
  );

  // ドロワー表示時だけ閉じる
  if ($(window).width() < 1200) {
    $("#js-drawer").slideUp();
    $("#js-button-drawer").removeClass("is-checked");
    $("body").removeClass("is-fixed");
  }
});

// ページトップへボタン
const topBtn = $("#page-top");
topBtn.hide();

$(window).on("scroll", function () {
  topBtn.toggle($(this).scrollTop() > 80);
});

topBtn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 500);
});
