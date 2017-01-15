// $(document).ready(function(){
//       var clock = $('.clock').FlipClock({
//           countdown: true,
//           clockFace: 'DailyCounter'

//       });

//       var now = new Date();
//       var wedding = new Date();
//       wedding.setFullYear(2017);
//       wedding.setMonth(5);
//       wedding.setDate(11);
//       wedding.setHours(16);
//       wedding.setMinutes(0);
//       wedding.setSeconds(0);

//       var seconds = (wedding.getTime() - now.getTime()) / 1000;

//       clock.setTime(seconds);
//       clock.start();
//   });

$('li img').on('click',function(){
    var src = $(this).attr('src');
    var img = '<img src="' + src + '" class="img-responsive"/>';

    var index = $(this).parent('li').index();                   
    var html = '';
    html += img;                
    html += '<div style="height:25px;clear:both;display:block;">';
    html += '<a class="controls next" href="'+ (index+2) + '">next &raquo;</a>';
    html += '<a class="controls previous" href="' + (index) + '">&laquo; prev</a>';    
    html += '</div>';

    $('#myModal').modal();
    $('#myModal').on('shown.bs.modal', function(){
        $('#myModal .modal-body').html(html);
        $('a.controls').trigger('click');
    });
    $('#myModal').on('hidden.bs.modal', function(){
        $('#myModal .modal-body').html('');
    });
});

$('#myModal').on('click', '.img-responsive', function() {
  $('a.controls.next').trigger('click');
});

$('#myModal').keydown(function(e) {
  console.log(e);
  if (e.keyCode == 37) {
    $('a.controls.previous').trigger('click');
  } else if (e.keyCode == 39) {
    $('a.controls.next').trigger('click');
  }
});

$(document).on('click', 'a.controls', function(){
   var index = $(this).attr('href');
   var src = $('ul.row li:nth-child('+ index +') img').attr('src');     
   var title = $('ul.row li:nth-child('+ index +') img').attr('title');             
   $('.modal-body img').attr('src', src);

  if (title) {
    $('.modal-heading').html(title);
    $('.modal-heading').show();
  } else {
    $('.modal-heading').hide();
  }

   var newPrevIndex = parseInt(index) - 1; 
   var newNextIndex = parseInt(newPrevIndex) + 2; 

   var total = $('ul.row li').length + 1; 

   //hide next button
  if(total === newNextIndex){
      newNextIndex = 1;
  }

  if(0 === newPrevIndex) {
    newPrevIndex = total - 1;
  }  
 
  if($(this).hasClass('previous')){               
      $(this).attr('href', newPrevIndex); 
      $('a.next').attr('href', newNextIndex);
  }else{
      $(this).attr('href', newNextIndex); 
      $('a.previous').attr('href', newPrevIndex);
  }

  return false;
}); 

$('#weddingTab').click(function() {
  $('#mapDiv').html('<iframe src="https://www.google.com/maps/d/embed?mid=14Tdcu1Nov6nO3gu66weiIIpCjaU" width="100%" height="600"></iframe>');
});