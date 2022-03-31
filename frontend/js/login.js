function guestLogin(){
    fetch("/api/guest/login", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        }
    })
    .then(res => res.json())
    .then(res => {
        alert(res)
        if (res === "Wellcome to Avocard!") {
            const localStorageCheck = localStorage.length;
            const guestCheck = localStorage.getItem("Avocard")
            
            if(!localStorageCheck || guestCheck != "guest"){
                localStorage.clear();
                let storage = {
                    "user":"guest",
                    "pocket":{
                        "1":"apple",
                        "2":"banana"
                    },
                    "setting":{
                        "theme":"#000000"
                    }
                };
                localStorage.setItem("Avocard",JSON.stringify(storage));
            } 
            window.location.href = "/pocket.html";
            return;
        }
    })
    .catch(error => {
        console.log("user login failed - " + error);
    })
}