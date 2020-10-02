const btnToggel = document.querySelector(".toggle-btn");
btnToggel.addEventListener("click", function(){
    document.getElementById("sidebar").classList.toggle("active");
});