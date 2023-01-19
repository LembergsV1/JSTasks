function change_background() {
    docBody = document.getElementsByTagName("body")[0];
     myBodyElements = docBody.getElementsByTagName("p");
     myp1 = myBodyElements[0];
     myp1.style.background = "#F5F5DC";
     myp2 = myBodyElements[1];
     myp2.style.background = "#FFC0CB";
   }