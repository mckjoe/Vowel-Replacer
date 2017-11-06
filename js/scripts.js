$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var letters = $("#sentence").val().split("");
    for (var i=0; i < letters.length; i++) {
      if (letters[i] === "a") {
        letters[i] = "-";
      } else if  (letters[i] === "e") {
        letters[i] = "-";
      } else if  (letters[i] === "i") {
        letters[i] = "-";
      } else if  (letters[i] === "o") {
        letters[i] = "-";
      } else if (letters[i] === "u") {
        letters[i] = "-";
      } else if  (letters[i] === "y") {
        letters[i] = "-";
      }
    }
    // console.log(letters.join(""));
    $("#code").text(letters.join(""));
    $("#input").fadeOut();
    $(".outputText").show()
  });
  $("#butt").click(function() {
    window.location.reload();
  });
});
