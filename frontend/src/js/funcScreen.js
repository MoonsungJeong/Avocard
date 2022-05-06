export default class reqGuest {
    constructor(){
        console.log("screen function on");
    }
    screenOn(){
        document.querySelector(".screen").style.display="flex";
    }
    screenOff(){
        document.querySelector(".screen").style.display="none";
    }
}
