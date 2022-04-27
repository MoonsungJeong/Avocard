(function getNoticeBrief(){
    fetch(`/api/notice`)
        .then(res => res.json())
        .then(list => {
            console.log(list);
        })
        .catch(error => {
            console.log("request notice brief failed - " + error)
        })
})();














const btn_list = document.querySelectorAll(".notice-box");
//console.log(btn_list);
btn_list.forEach(function(item){
    //console.log(item);
    item.addEventListener("click",displayChange,false);
});
function displayChange(e){
    let target="";
    if(e.target.classList.contains("notice-box")){
        target = e.target.nextElementSibling;
    }else{
        target = e.target.parentNode.parentNode.nextElementSibling;
    }
    if(target.style.display == "" || target.style.display == "none"){
        target.style.display="block";
        return;
    }
    if(target.style.display == "block"){
        target.style.display="none";
        return;
    }
}