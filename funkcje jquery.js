
  $(document).ready(function(){
    $("#button_01").click(function(){
      $("p").hide(500);
    })
    $("#button_02").click(function(){
      $("#p_03").hide();
  })
  $("#button_03").click(function(){
    $(".cp_01").hide();
  })
  $("#button_04").click(function(){
    $("*").hide();
  })
    $("#button_05").click(function(){
      $("[href]").hide();
    })
    $("#button_06").click(function(){
      $("h1").hide();
    })
    $("#button_07").click(function(){
      $("ul li:first").hide();
    })
    $("#button_08").click(function(){
      $("ul li:first-child").hide();
  })
    $("#button_09").click(function(){
      $(":button").hide();
    })
    $("#button_10").click(function(){
    $("p").show();
  })
  $("#button_11").click(function(){
    $(".cp_02").toggle();
  })
});