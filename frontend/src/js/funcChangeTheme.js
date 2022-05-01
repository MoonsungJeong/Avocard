export default class funcChangeTheme {
    constructor(){
        const theme = document.getElementsByName("theme");
        theme.forEach(element => { element.addEventListener("change",(e)=>{this.changeTheme(e)},false);});
    }
    changeTheme(e){ 
        const sessionSetting = JSON.parse(sessionStorage.getItem("setting"));
        //guest user
        if(!sessionSetting){
            let storage = JSON.parse(localStorage.Avocard);
            storage.setting.theme = e.target.id;
            localStorage.setItem("Avocard",JSON.stringify(storage));
            this.setTheme();
        }
        //login user

    }
    setTheme(){
        const sessionSetting = JSON.parse(sessionStorage.getItem("setting"));
        //guest user
        if(!sessionSetting){
            const storage = JSON.parse(localStorage.Avocard);
            const theme = storage.setting.theme;
            let background = document.getElementsByTagName("body")[0];
            
            switch(theme){
                case 'light':
                    background.style.background="#ffffff";
                    background.style.color="#000000";
                    break;
                case 'dark':
                    background.style.background="#000000";
                    background.style.color="#ffffff";
                    break;
                case 'cherry':
                    background.style.background="#FFC0CB";
                    background.style.color="#C0FFF4";
                    break;
            }
        }
    }
}


/* 

localStorage.setItem("theme", "light");

const theme = document.getElementsByName("theme");
theme.forEach(element => {
    element.addEventListener("change",changeTheme);
});
function changeTheme(e){
    localStorage.setItem("theme", e.target.id);
    setTheme();
}
function setTheme(){
    const theme = localStorage.getItem("theme");
    const background = document.getElementsByTagName("body")[0];
    switch(theme){
        case 'light':
            background.style.background="#ffffff";
            background.style.color="#000000";
            break;
        case 'dark':
            background.style.background="#000000";
            background.style.color="#ffffff";
            break;
        case 'cherry':
            background.style.background="#FFC0CB";
            background.style.color="#C0FFF4";
            break;
    }
}

 */