// Function to show an alert message when the "Bigger!" button is clicked
function showAlert() {
    alert("Hello, world!");
  }
  
  // Function to make the text bigger when the "Bigger!" button is clicked
  function makeTextBigger() {
    var textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
  }
  
  // Function to change text styles when "FancyShmancy" or "BoringBetty" is selected
  function styleText() {
    var textArea = document.getElementById("textArea");
  
    if (document.getElementById("fancyShmancy").checked) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";
    }
  }
  
  // Function to uppercase text and add "-Moo" suffix to sentences
  function addMoo() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value;
  
    // Convert the text to uppercase
    var upperText = text.toUpperCase();
  
    // Add "-Moo" to each sentence
    var sentences = upperText.split(".");
    for (var i = 0; i < sentences.length; i++) {
      sentences[i] = sentences[i].trim() + "-Moo";
    }
  
    // Join the sentences back and set the value
    textArea.value = sentences.join(". ");
  }
  
  // Event listeners for buttons and radio buttons
  document.getElementById("biggerButton").onclick = function() {
    makeTextBigger();
  };
  
  document.getElementById("fancyShmancy").onchange = function() {
    styleText();
  };
  
  document.getElementById("boringBetty").onchange = function() {
    styleText();
  };
  
  document.getElementById("mooButton").onclick = function() {
    addMoo();
  };
  
  // Initial alert to confirm JS is working (on page load)
  window.onload = function() {
    showAlert();
  };
  