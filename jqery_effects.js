$(document).ready(function () {
  $("#button_01").click(function () {
    $("#p1").fadeOut("fast");
    $("#p2").fadeOut("slow");
    $("#p3").fadeOut(800);
  });
  $("#button_02").click(function () {
    $("#p1").fadeIn("fast");
    $("#p2").fadeIn("slow");
    $("#p3").fadeIn(800);
  });
  $("#button_03").click(function () {
    $("#p1").fadeTo("fast", 0.1);
    $("#p2").fadeTo("slow", 0.7);
    $("#p3").fadeTo(800, 0.5);
  });
  $("#button_04").click(function () {
    $("#p1").fadeToggle("fast");
    $("#p2").fadeToggle("slow");
    $("#p3").fadeToggle(800);
  });
  $("#button_05").click(function () {
    $("h1").slideDown();
  });
  $("#button_06").click(function () {
    $("h1").slideUp();
  });
  $("#button_07").click(function () {
    $("h1").slideToggle();
  });
  $("#button_08").click(function () {
  var div = $(".redSquare");
    div.animate({ height: '500px' ,fontSize: "4em"}, "slow");
    div.animate({ width: '500px',fontSize: "3em" }, "slow");
    div.animate({ height: '100px',fontSize: "1em" }, "slow");
    div.animate({ width: '200px',fontSize: "2em" }, "slow");
    div.animate({ height: '100px',fontSize: "1em" }, "slow");
    div.css("background-color", "blue");
    div.animate({ width: '100px' }, "slow");
});
$("#button_09").click(function(){
  $('.redSquare').stop(true,true);
});
});
