export default class validCheck {
  constructor(){
      document.querySelector("#email").addEventListener("keyup", (e) => {this.check(e.target)});
      document.querySelector("#username").addEventListener("keyup", (e) => {this.check(e.target)});
      document.querySelector("#password").addEventListener("keyup", (e) => {this.check(e.target)});
      document.querySelector("#repassword").addEventListener("keyup", (e) => {this.check(e.target)});
      document.querySelector("#repassword").addEventListener("blur", (e) => {this.password_check(e.target)}); 
  }
  _CLASS_CHECK_REMOVE(elementName, className){
    let bool = elementName.classList.contains(className);
    if(bool){
      elementName.classList.remove(className);
      return;
    }
  }
  _CLASS_CHECK_ADD(elementName, className){
    let bool = elementName.classList.contains(className);
    if(!bool){
      elementName.classList.add(className);
      return;
    }
  }
  _CLASS_CHANGE_PASS(elementName){
    this._CLASS_CHECK_REMOVE(elementName,"no_pass");
    this._CLASS_CHECK_ADD(elementName,"pass");
  }
  _CLASS_CHANGE_NO_PASS(elementName){
    this._CLASS_CHECK_REMOVE(elementName,"match");
    this._CLASS_CHECK_REMOVE(elementName,"no_match");
    this._CLASS_CHECK_REMOVE(elementName,"pass");
    this._CLASS_CHECK_ADD(elementName,"no_pass");
  }
  _CLASS_CHANGE_NO_MATCH(elementName){
    this._CLASS_CHECK_REMOVE(elementName,"match");
    this._CLASS_CHECK_ADD(elementName,"no_match");
  }
  _CLASS_CHANGE_MATCH(elementName){
    this._CLASS_CHECK_REMOVE(elementName,"no_match");
    this._CLASS_CHECK_ADD(elementName,"match");
  }
  _CLASS_INIT(elementName){
    this._CLASS_CHECK_REMOVE(elementName,"no_pass");
    this._CLASS_CHECK_REMOVE(elementName,"pass");
  }
  check(el){
    let err_box = el.parentElement.nextElementSibling;
    if(el.id=="phone" && el.value == ''){
      this._CLASS_INIT(err_box);
      return;
    }
    if(!el.checkValidity()){
      this._CLASS_CHANGE_NO_PASS(err_box);
    }else if(el.checkValidity() && el.value != ''){
      this._CLASS_CHANGE_PASS(err_box);
    }
  }
  password_check(el){
    const password = document.getElementById("password");
    const retype_password = el;
    let err_box = el.parentElement.nextElementSibling;
    if(retype_password.value == ""){
      return;
    }
    if(password.value != retype_password.value){
      this._CLASS_CHANGE_NO_MATCH(err_box);
    }else if(password.value == retype_password.value){
      this._CLASS_CHANGE_MATCH(err_box);
    }
  }
}

