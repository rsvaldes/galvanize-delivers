$(document).ready(function(){
  $('.order-btn').on("click", function() {
    $('.first').hide();
    $('.hidden').show();
  });



  $('#weinerdawg').one("click", function() {
    $(".table").append($('<tr id = "weinerrow" class ="trow"></tr>'));
    $("#weinerrow").append("<td>Weiner Dawg</td>");
    $("#weinerrow").append("<td>$5</td>");
    $("#weinerrow").append($('<td id = "weinerquantity" class = "quantity">1</td>'));

  });

  $('#chikagadawg').one("click", function() {
    $(".table").append($('<tr id = "chikagarow" class ="trow"></tr>'));
    $("#chikagarow").append("<td>Chikaga Dawg</td>");
    $("#chikagarow").append("<td>$6</td>");
    $("#chikagarow").append($('<td id = "chikagaquantity" class = "quantity">1</td>'));
  });
  $('#shillydawg').one("click", function() {
    $(".table").append($('<tr id = "shillyrow" class ="trow"></tr>'));
    $("#shillyrow").append("<td>Shilly Dawg</td>");
    $("#shillyrow").append("<td>$6</td>");
    $("#shillyrow").append($('<td id = "shillyquantity" class = "quantity">1</td>'));
  });
  $('#packledawg').one("click", function() {
    $(".table").append($('<tr id = "packlerow" class ="trow"></tr>'));
    $("#packlerow").append("<td>Packle Dawg</td>");
    $("#packlerow").append("<td>$6</td>");
    $("#packlerow").append($('<td id = "packlequantity" class = "quantity">1</td>'));
  });
  $('#jalapenodawg').one("click", function() {
    $(".table").append($('<tr id = "jalapenorow" class ="trow"></tr>'));
    $("#jalapenorow").append("<td>Halapena Dawg</td>");
    $("#jalapenorow").append("<td>$6</td>");
    $("#jalapenorow").append($('<td id = "jalapenoquantity" class = "quantity">1</td>'));
  });
  $('#hairydawg').one("click", function() {
    $(".table").append($('<tr id = "hairyrow" class ="trow"></tr>'));
    $("#hairyrow").append("<td>Hairy Dawg</td>");
    $("#hairyrow").append("<td>$5</td>");
    $("#hairyrow").append($('<td id = "hairyquantity" class = "quantity">1</td>'));
  });

  function whole () {

    var hairycount = 0;
    $('#hairydawg').click(function (){
      hairycount++;
      $('#hairyquantity').html(+hairycount);
    });
    var jalapenocount = 0;
    $('#jalapenodawg').click(function (){
      jalapenocount++;
      $('#jalapenoquantity').html(+jalapenocount);
    });
    var weinercount = 0;
    $('#weinerdawg').click(function (){
      weinercount++;
      $('#weinerquantity').html(+weinercount);
    });
    var packlecount = 0;
    $('#packledawg').click(function (){
      packlecount++;
      $('#packlequantity').html(+packlecount);
    });
    var chikagacount = 0;
    $('#chikagadawg').click(function(){
      chikagacount++;
      $('#chikagaquantity').html(+chikagacount);
    });

    var shillycount = 0;
    $('#shillydawg').click(function(){
      shillycount++;
      $('#shillyquantity').html(+shillycount);
    });
    var finalShilly = $('#shillyquantity').html();
    var finalChikaga = $('#chikagaquantity').html();
    var finalPackle = $('#packlequantity').html();
    var finalWeiner = $('#weinerquantity').html();
    var finalHairy = $('#hairyquantity').html();
    var finalJalapeno = $('#jalapenoquantity').html();

    function getSubtotal () {
      var q5 = 0;
      var q6 = 0;

      q5 = (finalWeiner + finalHairy) * 5;
      q6 = (finalyShilly + finalChikaga + finalJalapeno + finalPackle) * 6;
      return q6 + q5;
    }
var finalNum = getSubtotal();

finalNum = $('#subtotalNum')

}//closing whole
whole();
});
