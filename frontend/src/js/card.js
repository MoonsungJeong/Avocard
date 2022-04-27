function showThisCard(code){
    fetch(`/api/card/${code}`)
        .then(res => res.json())
        .then(card => {
            console.log(card);
        })
        .catch(error =>{
            console.log("see mycard list failed - " + error);
        })
};
showThisCard(114);