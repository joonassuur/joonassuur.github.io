//fade the site in on load
window.onload = function(){
    let divs = document.querySelectorAll("div");
    divs.forEach(function(x) {
        x.style.opacity = "1";
    });
};


