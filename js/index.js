// ハンバーガーボタン
$("#js-button-drawer").on("click", function () {
  $(this).toggleClass("is-checked");
  $("#js-drawer").slideToggle();
  $("body").toggleClass("is-fixed");
});

// 固定ヘッダー分の高さ（スクロール調整用）
const headerHeight = 81; // ヘッダーの高さに合わせて調整

// スマホ用ドロワー内リンク（内部リンクのみ）
function setupDrawerLinks() {
  if ($(window).width() <= 768) {
    // スマホ判定
    $(".header__nav-link")
      .off("click")
      .on("click", function (e) {
        const href = $(this).attr("href");

        // 内部リンクのみスムーズスクロール
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const target = href;
          const position = $(target).offset().top - headerHeight;

          $("html, body").animate({ scrollTop: position }, 500);

          $("#js-drawer").slideUp();
          $("#js-button-drawer").removeClass("is-checked");
          $("body").removeClass("is-fixed");
        }
        // #から始まらないリンク（別ページへのリンク）は通常遷移
      });
  }
}

// PC用ヘッダーナブリンク（内部リンクのみ）
function setupPCNavLinks() {
  if ($(window).width() > 768) {
    // PC判定
    $(".header__nav-link")
      .off("click")
      .on("click", function (e) {
        const href = $(this).attr("href");

        if (href && href.startsWith("#")) {
          // 内部リンクのみ
          e.preventDefault();
          const position = $(href).offset().top;
          $("html, body").animate({ scrollTop: position }, 500);
        }
        // #から始まらないリンク（別ページへのリンク）は通常遷移
      });
  }
}

// 初回実行
setupDrawerLinks();
setupPCNavLinks();

// ウィンドウリサイズ時に再設定（スマホ⇄PC切替対応）
$(window).on("resize", function () {
  setupDrawerLinks();
  setupPCNavLinks();
});

//　ページトップへボタン
jQuery(function () {
  const topBtn = jQuery("#page-top");
  topBtn.hide(); //最初は非表示

  //ボタンの表示設定
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > 80) {
      // 画面を80pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    } else {
      // 画面が80pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたら、スクロールして上に戻る
  topBtn.on("click", function (e) {
    e.preventDefault();
    jQuery("html,body").animate({ scrollTop: 0 }, 500);
  });
});




