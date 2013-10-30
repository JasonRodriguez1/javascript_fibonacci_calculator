function fibonacci(num) {
  if (num < 1) {
    return "error";
  } else if (num === 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  } else {
    return fibonacci(num - 2) + fibonacci(num - 1);
  }
}

function fibArray(num) {
  fibArray = [];
  for (var i = 1; i < num; i++) {
    fibArray.push(fibonacci(i));
  }
  return fibArray;
}

$(function() {
  $("form#user-input").submit(function() {
    var sequenceNum = parseInt($("#user-input input").val());
    var result = fibonacci(sequenceNum);
    var resultArray = fibArray(sequenceNum);
    console.log(resultArray);

    if(result === "error") {
      alert("Invalid Input");
    } else {
      $("#results h1").empty().append(result);
      $("#results").fadeIn();   
    }
    return false;
  });
});
