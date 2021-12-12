
  $(document).ready(function(){
    $("#btn1").click(function(){
      $("#p1").fadeToggle(2500)
    });
    $("#btn1").click(function(){
      $("#p2").fadeToggle("slow", "linear");
    });
    $("#btn1").click(function(){
      $("#p3").fadeToggle("fast");
    });
  });
