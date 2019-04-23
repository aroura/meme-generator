var main = function() {
  $("#top-text").keyup(function() {
    var toAdd = $("#top-text").val();
    $(".top-caption").text(toAdd);
  });
  $("#bottom-text").keyup(function() {
    var toAdd = $("#bottom-text").val();
    $(".bottom-caption").text(toAdd);
  });
  $("#img-url").keyup(function() {
    var toAdd = $("#img-url").val();
    $(".meme").children().attr("src", toAdd);
  });
};
 
$(document).ready(main);