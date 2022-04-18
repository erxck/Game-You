const i = setInterval(
    
    function () {
    
    clearInterval(i);
  
    document.getElementById("main-page").style.display = "inline";
    document.getElementById("page-loading").style.display = "none";

}, 1000);