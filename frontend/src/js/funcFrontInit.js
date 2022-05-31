import StorageCheck from "./funcStorageCheck.js";
import Router from "../app.js";

export default class frontInit {
    constructor(){
        this.logUserCheck();
    }
    logUserCheck(){
        const storage = new StorageCheck();
        
        if(storage.storageUserCheck() !== ""){
            history.pushState(null, null, "/pocket");
            new Router();
        }
    }
}
