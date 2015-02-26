// $(document).ready(function() {
// 	$("#happyquote").html("hey")
// });

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://happyapi.co/api/daily/?t"+Math.random(), true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // JSON.parse does not evaluate the attacker's scripts.
    console.log(JSON.parse(xhr.response).quote);
    document.getElementById("happyquote").innerText = JSON.parse(xhr.response).quote;
  }
}
xhr.send();

// $(document).ready(function(){$.ajax({url:"http://happyapi.co/api/daily/?t"+Math.random(),dataType:"jsonp",success:function(e){$("#happyquote").html(e.quote)}})});