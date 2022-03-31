const nav_btn_list = document.querySelectorAll(".nav-icon-wrap");
nav_btn_list.forEach(function(item){
    item.addEventListener("click",menuChange,false);
});
(function(){
    const nav_btn_selected = document.querySelector(".nav-selected");
    const nav_btn_pocket = document.getElementById("pocket");
    nav_btn_selected.style.left = nav_btn_pocket.offsetLeft+"px";
    
})();
function menuChange(e){
    const nav_container = document.querySelector(".nav-container");
    const nav_btn_selected = document.querySelector(".nav-selected");
    if(e.target.parentNode == nav_container){
        nav_btn_selected.style.left= e.target.offsetLeft+"px";
    }
    if(e.target.parentNode != nav_container){
        nav_btn_selected.style.left= e.target.parentNode.offsetLeft+"px";
    }
    
}