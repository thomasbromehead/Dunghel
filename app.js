$(document).ready(function(){
  // $('button').addClass('animated bounce');
   //$('.btn-success').addClass('animated shake');
   //$('#target6').addClass('wobble');
   //$('button').removeClass('btn-success');
   //$('#target1').css({color: 'red', backgroundColor: 'blue'});
   //$('#target2').prop('disabled', true) //Disables button
   $('h1').html("Learning <strong>jQuery</strong> is a lot of fun");
   //$("#target1").remove();
   //$('#target4').appendTo('.left');
   //$('.left').clone().appendTo('.right');
   //$('.heading2').parent().css('backgroundColor', 'red'); //targetting parent
   $('.heading2right').children().css('color','green'); //targetting child
   $('.target:nth-child(3)').addClass('flash'); //targetting 3rd element
   //$('.target:nth-child(2)').addClass('animated swing'); //targetting 2nd element
   //$('.target:odd').addClass('animated swing'); //O based array
   $('.target:even').addClass('animated swing'); //targetting even numbers
   $('.question').mouseover(function(){  //can also be written as .click(function(){}), .mouseover etc
      $('.answer').html('jQuery is a great library!')
   });
   var url = "http://hn.algolia.com/api/v1/search?query=javascript";
   $.getJSON(url, function(data){
     console.log(data);
     console.log(typeof data);
     if(Array.isArray(data.hits)){
       console.log('this is an array');
     } else {
       console.log('not an array');
     }

     var allNews = data.hits; //20 hits, array
     var eachNews = '';
     allNews.map(function(item, index, array){
       
     })

   })


})