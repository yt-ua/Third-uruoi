// .s_07 .accordion_one※アコーディオンの動作

$(function () {
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.s_07 .accordion_one .accordion_header').click(function () {
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.accordion_inner').slideToggle();
    $(this).toggleClass("open");
  });
});