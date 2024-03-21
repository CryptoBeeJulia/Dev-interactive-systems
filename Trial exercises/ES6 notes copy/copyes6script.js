
hello = function() {
    return "Hello World!";
  }
  document.getElementById("demo1").innerHTML = hello();
  
  hello = () => "Hello World!";
  document.getElementById("demo2").innerHTML = hello();
  
  hello = val => 'Hello' + val;
  document.getElementById("demo3").innerHTML = hello(" Julia!")