$(document).ready(function() {
  $("div .radio").click(function(){
    $("#liberal").hide();
    $("#centerist").hide();
    $("#conservative").hide();
  })
  $("#survey form").submit(function(event) {
    // console.log("submit success");
    var scoreOne = parseInt($("input:radio[name=q1]:checked").val());
    var scoreTwo = parseInt($("input:radio[name=q2]:checked").val());
    var scoreThree = parseInt($("input:radio[name=q3]:checked").val());

    var scoreTotal = scoreOne + scoreTwo + scoreThree;

    if (scoreTotal <= 10) {
      $("#liberal").show();
    } else if (scoreTotal >= 11 && scoreTotal <= 20) {
      $("#centerist").show();
    } else if (scoreTotal >= 21) {
      $("#conservative").show();
    }

  event.preventDefault();
  });
});


// Thanks to Brian and Nathan for letting us look over their shoulder, Michael and I had a mental blowout trying to figure out the way to do this one
