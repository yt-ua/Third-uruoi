//-----------------------------------
//サイト開いた際のローディング画面
//----------------------------------


$(window).on('load', function () {
  $("#splash").delay(4000).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(4000).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});