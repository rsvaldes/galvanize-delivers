$(document).ready(function(){
  $('.order-btn').on("click", function () {
    $('#itemcolumn').append("Dawg");
    $('#pricecolumn').append("Price");
  })
  $('#weinerdawg').on("click", function() {
      $('#item').append("Weiner Dawg");
      $('#price').append("$5");


  })
  $('#chicagodawg').on("click", function() {
      $('#item').append("Chikaga Dawg");
      $('#price').append("$6");


  })
});
