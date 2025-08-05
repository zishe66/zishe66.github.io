// トップへスクロール
$(function(){
  var pageTop = $("#page-top");
  pageTop.hide();
  pageTop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
  $(window).scroll(function () { 
    if($(this).scrollTop() >= 200) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });

//論文などのアーカイブのスクロール設定
  $('.side-menu a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop' : position
    }, 500);
    });
});


// モダール部分
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImage');
const imgs = document.querySelectorAll('.popup');
const closeSpan = document.getElementById('close');

for( let img of imgs) {
    img.onclick = function(){
      modal.style.opacity = "1";
      modal.style.visibility = "visible";
      modalImg.src = this.src;
    }
}

// モダールを閉じる
closeSpan.onclick = function() {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
    }
}

