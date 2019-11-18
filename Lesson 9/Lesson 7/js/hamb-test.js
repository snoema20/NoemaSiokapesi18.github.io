  
 function ShowMenu() {
    var x = document.getElementById("menu");
  
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}