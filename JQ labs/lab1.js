var $form = document.getElementById('form');
// var $close = documnent.getElementById('close');

$('#1, #2, #3, #4, #5, #6, #7, #8, #9').click(function(){
  $('.form').show();
});

document.getElementById('close').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.style.display = 'none';
}, false);

$('.submit').on('click', function() {
    var numberVal = $('number').val(); 
    console.log('numberVal');
});
