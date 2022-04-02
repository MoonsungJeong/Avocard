(function showMyCardList(){
    fetch(`/api/card`)
        .then(res => res.json())
        .then(list => {
            console.log(list);
        })
        .catch(error => {
            console.log("request mycard list failed - " + error);
        })
})();