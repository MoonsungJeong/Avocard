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
            const guestCheck = JSON.parse(localStorage.getItem("Avocard"));
            
            if(!localStorageCheck || guestCheck == null){
                let storage = {
                    "pocket":[
                        {
                            "code":"111",
                            "note":"nice man"
                        },
                        {
                            "code":"112",
                            "note":"good man"
                        },
                        {
                            "code":"113",
                            "note":"work well"
                        }
                    ],
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