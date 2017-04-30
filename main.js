$(document).ready(function(){
  $('.order-btn').on("click", function() {
    $('.first').hide();
    $('.hidden').show();
  });
  $(function(){
      // var $select = $(".1-100");
      for (i=1;i<=100;i++){
          $('.select').append($('<option></option>').val(i).html(i));
      }
  });


  $('#weinerdawg').one("click", function() {
    $(".table").append($('<tr id = "weinerrow" class ="trow"></tr>'));
    $("#weinerrow").append("<td>Weiner Dawg</td>");
    $("#weinerrow").append("<td>$5</td>");
    $('#weinerselect').show();
    $("#weinerrow").append('<td id = "weinerquantity"></td>');
    $('#weinerquantity').append($('#weinerselect'));

  });
  $('#chikagadawg').one("click", function() {
    $(".table").append($('<tr id = "chikagarow" class ="trow"></tr>'));
    $("#chikagarow").append("<td>Chikaga Dawg</td>");
    $("#chikagarow").append("<td>$6</td>");
    $('#chikagaselect').show();
    $("#chikagarow").append('<td id = "chikagaquantity"></td>');
    $('#chikagaquantity').append($('#chikagaselect'));
  });
  $('#shillydawg').one("click", function() {
    $(".table").append($('<tr id = "shillyrow" class ="trow"></tr>'));
    $("#shillyrow").append("<td>Shilly Dawg</td>");
    $("#shillyrow").append("<td>$6</td>");
    $('#shillyselect').show();
    $("#shillyrow").append('<td id = "shillyquantity"></td>');
    $('#shillyquantity').append($('#shillyselect'));
  });
  $('#packledawg').one("click", function() {
    $(".table").append($('<tr id = "packlerow" class ="trow"></tr>'));
    $("#packlerow").append("<td>Packle Dawg</td>");
    $("#packlerow").append("<td>$6</td>");
    $('#packleselect').show();
    $("#packlerow").append('<td id = "packlequantity"></td>');
    $('#packlequantity').append($('#packleselect'));
  });
  $('#jalapenodawg').one("click", function() {
    $(".table").append($('<tr id = "jalapenorow" class ="trow"></tr>'));
    $("#jalapenorow").append("<td>Halapena Dawg</td>");
    $("#jalapenorow").append("<td>$6</td>");
    $('#jalapenoselect').show();
    $("#jalapenorow").append('<td id = "jalapenoquantity"></td>');
    $('#jalapenoquantity').append($('#jalapenoselect'));
  });
  $('#hairydawg').one("click", function() {
    $(".table").append($('<tr id = "hairyrow" class ="trow"></tr>'));
    $("#hairyrow").append("<td>Hairy Dawg</td>");
    $("#hairyrow").append("<td>$5</td>");
    $('#hairyselect').show();
    $("#hairyrow").append('<td id = "hairyquantity"></td>');
    $('#hairyquantity').append($('#hairyselect'));
  });
// function getSubTotal () {
//   var q5 = $( '#hairyselect').val(); + $( "#weinerselect" ).val() * 5;
//   var q6 = $( "#chikagaselect" ).val(); + $( "#jalapenoselect" ).val() +$( "#packleselect" ).val(); + $( "#shillyselect" ).val() * 6;
//   return q5 + q6;
// }
// var finalNum = getSubTotal();


});
