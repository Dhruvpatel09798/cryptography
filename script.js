function encryptMessage() {
    var message = document.getElementById("messageInput").value;
    var shift = 3; // Caesar cipher shift value
    var encryptedMessage = "";
  
    for (var i = 0; i < message.length; i++) {
      var charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // Uppercase letters
        encryptedMessage += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
        encryptedMessage += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      } else {
        encryptedMessage += message.charAt(i);
      }
    }
  
    document.getElementById("output").value = encryptedMessage;
  }
  
  function decryptMessage() {
    var message = document.getElementById("output").value;
    var shift = 3; // Caesar cipher shift value
    var decryptedMessage = "";
  
    for (var i = 0; i < message.length; i++) {
      var charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // Uppercase letters
        decryptedMessage += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
        decryptedMessage += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
      } else {
        decryptedMessage += message.charAt(i);
      }
    }
  
    document.getElementById("output").value = decryptedMessage;
  }
  