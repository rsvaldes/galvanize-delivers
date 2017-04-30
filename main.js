$(document).ready(function(){
  $('.order-btn').on("click", function() {
    $('.first').hide();
  })

$('.order-btn').on("click", function () {
  $('.hidden').show();
})

  $('#weinerdawg').one("click", function() {
    $(".table").append($('<tr id = "weinerrow" class ="row"></tr>'));
    $("#weinerrow").append("<td>Weiner Dawg</td>");
    $("#weinerrow").append("<td>$5</td>");
    $("#weinerrow").append($('<td id = "weinerquantity">1</td>'));

  })

  $('#chicagodawg').one("click", function() {
    $(".table").append($('<tr id = "chikagarow" class ="row"></tr>'));
    $("#chikagarow").append("<td>Chikaga Dawg</td>");
    $("#chikagarow").append("<td>$6</td>");
    $("#chikagarow").append($('<td id = "chikagaquantity">1</td>'));
  })
  $('#shillydawg').one("click", function() {
    $(".table").append($('<tr id = "shillyrow" class ="row"></tr>'));
    $("#shillyrow").append("<td>Shilly Dawg</td>");
    $("#shillyrow").append("<td>$6</td>");
    $("#shillyrow").append($('<td id = "shillyquantity">1</td>'));
  })
  $('#packledawg').one("click", function() {
    $(".table").append($('<tr id = "packlerow" class ="row"></tr>'));
    $("#packlerow").append("<td>Packle Dawg</td>");
    $("#packlerow").append("<td>$6</td>");
    $("#packlerow").append($('<td id = "packlequantity">1</td>'));
  })
  $('#jalapenodawg').one("click", function() {
    $(".table").append($('<tr id = "jalapenorow" class ="row"></tr>'));
    $("#jalapenorow").append("<td>Halapena Dawg</td>");
    $("#jalapenorow").append("<td>$6</td>");
    $("#jalapenorow").append($('<td id = "jalapenoquantity">1</td>'));
  })
  $('#hairydawg').one("click", function() {
    $(".table").append($('<tr id = "hairyrow" class ="row"></tr>'));
    $("#hairyrow").append("<td>Hairy Dawg</td>");
    $("#hairyrow").append("<td>$5</td>");
    $("#hairyrow").append($('<td id = "hairyquantity">1</td>'));
    
    })


});
