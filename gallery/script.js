$(function(){
    let buttonPrev = $('.gallery button:eq(0)'),
        buttonNext = $('.gallery button:eq(1)'),
        index = 0;
    ;

    buttonNext.click(function() {
      $('.gallery img:eq(' + index +')').hide();
      index++;
      if (index ===4) {
        index = 0;
      }
      $('.gallery img:eq(' + index +')').show();
    })
    

});