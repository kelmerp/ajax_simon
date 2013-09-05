$(document).ready(function(){
  $('div.container').on('click','a#get_color',function(event){
    event.preventDefault();
    $.post('/color',function(success){
      $('li:nth-child('+success.cell+')').css('background-color', success.color)
    },"json");
  });
});
