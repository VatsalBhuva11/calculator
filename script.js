$('.btn').click(function(){
    if (this.id !== "="){
        $('.result > p').text($('.result > p').text() + this.id);
    }
    $(this).fadeOut(50).fadeIn(50);
})

$('.backspace').click(function(){
    $('.result > p').text($('.result > p').text() + this.id);
})

$('.AC').click(function(){
    $('.result > p').text("");
})

$('.backspace').click(function(){
    let len = $('.result > p').text().length 
    if (len > 0){
        $('.result > p').text($('.result > p').text().slice(0, len-1));
    }
})

$('.equal').click(function(){
    // console.log(eval($('.result > p').text()));
    console.log($('.result > p').text());
    $('.result > p').text(eval($('.result > p').text()));
})