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