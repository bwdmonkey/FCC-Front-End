//test

$(document).ready(function() {
  var current = "";
  var temp;
  var tempfn = "";
  $("#0").click(function() {
    if (current != "") {
      current = current.concat("0");
      $("#output").val(current);
    }
    if (current.length > 16) { digitlimit(); }
  })
  $("#1").click(function() {
    current = current.concat("1");
    $("#output").val(current);
    if (current.length > 16) { digitlimit(); }
  })
  $("#2").click(function() {
    current = current.concat("2");
    $("#output").val(current);
    if (current.length > 16) { digitlimit(); }
  })
  $("#3").click(function() {
    current = current.concat("3");
    $("#output").val(current);
    if (current.length > 16) { digitlimit(); }
  })
  $("#4").click(function() {
    current = current.concat("4");
    $("#output").val(current);
    if (current.length > 16) { digitlimit(); }
  })
  $("#5").click(function() {
    current = current.concat("5");
    $("#output").val(current);
    if (current.length > 16) { digitlimit(); }
  })
  $("#6").click(function() {
    current = current.concat("6");
    $("#output").val(current);
    if (current.length > 16) { digitlimit(); }
  })
  $("#7").click(function() {
    current = current.concat("7");
    $("#output").val(current);
    if (current.length > 16) { digitlimit(); }
  })
  $("#8").click(function() {
    current = current.concat("8");
    $("#output").val(current);
    if (current.length > 16) { digitlimit(); }
  })
  $("#9").click(function() {
    current = current.concat("9");
    $("#output").val(current);
    if (current.length > 16) { digitlimit(); }
  })
  $("#dot").click(function() {
    if (!current.includes(".")) {
      if (current == "") {
        current = current.concat("0.");
        $("#output").val(current);
      }
      else {
        current = current.concat(".");
        $("#output").val(current);
      }
    }
    if (current.length > 16) { digitlimit(); }
  })
  $("#plus").click(function() {
    if (current == "") {
      current = "0";
    }
    current = parseFloat(current);
    if (tempfn == "+") {
      current += temp;
    }
    if (tempfn == "-") {
      current -= temp;
    }
    if (tempfn == "*") {
        current *= temp;
    }
    if (tempfn == "/") {
      current = temp / current;
    }
    temp = current;
    tempfn = "+";
    current = "";
    
    
    current = current.toString();
    $("#output").val("0");
  })
  $("#minus").click(function() {
    if (current == "") {
      current = "0";
    }
    current = parseFloat(current);
    if (tempfn == "+") {
      current += temp;
    }
    if (tempfn == "-") {
      current -= temp;
    }
    if (tempfn == "*") {
        current *= temp;
    }
    if (tempfn == "/") {
      current = temp / current;
    }
    temp = current;
    tempfn = "-";
    current = "";
    
    
    current = current.toString();
    $("#output").val("0");
  })
  $("#multiply").click(function() {
    if (current == "") {
      current = "0";
    }
    current = parseFloat(current);
    if (tempfn == "+") {
      current += temp;
    }
    if (tempfn == "-") {
      current -= temp;
    }
    if (tempfn == "*") {
        current *= temp;
    }
    if (tempfn == "/") {
      current = temp / current;
    }
    temp = current;
    tempfn = "*";
    current = "";
    
    
    current = current.toString();
    $("#output").val("0");
  })
  $("#divide").click(function() {
    if (current == "") {
      current = "0";
    }
    current = parseFloat(current);
    if (tempfn == "+") {
      current += temp;
    }
    if (tempfn == "-") {
      current -= temp;
    }
    if (tempfn == "*") {
        current *= temp;
    }
    if (tempfn == "/") {
      current = temp / current;
    }
    temp = current;
    tempfn = "/";
    current = "";
    
    
    current = current.toString();
    $("#output").val("0");
  })
  $("#equal").click(function() {
    current = parseFloat(current);
    if (tempfn == "+") {
      current += temp;
    }
    if (tempfn == "-") {
      current -= temp;
    }
    if (tempfn == "*") {
        current *= temp;
    }
    if (tempfn == "/") {
      current = temp / current;
    }
    
    current = current.toString();
    $("#output").val(current);
    current = "";
  })
  $("#reset").click(function() {
    current = "";
    tempfn = "";
    $("#output").val("0");
  })
  function digitlimit() {
    current = "";
    $("#output").val("DIGIT LIMIT MET");
  }
});