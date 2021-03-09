$(function(){
  // アコーディオン
  $('.header-contents').hover(
    function() {
      $(this).find('.header-content').addClass('header-content-hover').fadeIn(300); 
      $(this).find('.content-lists').slideDown(100); 
      
    },
    function() {
      $(this).find('.header-content').removeClass('header-content-hover');
      $(this).find('.content-lists').fadeOut(100); 
    }
    );
  });