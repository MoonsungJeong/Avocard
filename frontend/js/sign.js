function _CLASS_CHECK_REMOVE(elementName, className){
  var bool = elementName.classList.contains(className);
  if(bool){
    elementName.classList.remove(className);
    return;
  }
}
function _CLASS_CHECK_ADD(elementName, className){
  var bool = elementName.classList.contains(className);
  if(!bool){
    elementName.classList.add(className);
    return;
  }
}
function _CLASS_CHANGE_PASS(elementName){
  _CLASS_CHECK_REMOVE(elementName,"no_pass");
  _CLASS_CHECK_ADD(elementName,"pass");
}
function _CLASS_CHANGE_NO_PASS(elementName){
  _CLASS_CHECK_REMOVE(elementName,"match");
  _CLASS_CHECK_REMOVE(elementName,"no_match");
  _CLASS_CHECK_REMOVE(elementName,"pass");
  _CLASS_CHECK_ADD(elementName,"no_pass");
}
function _CLASS_CHANGE_NO_MATCH(elementName){
  _CLASS_CHECK_REMOVE(elementName,"match");
  _CLASS_CHECK_ADD(elementName,"no_match");
}
function _CLASS_CHANGE_MATCH(elementName){
  _CLASS_CHECK_REMOVE(elementName,"no_match");
  _CLASS_CHECK_ADD(elementName,"match");
}
function _CLASS_INIT(elementName){
  _CLASS_CHECK_REMOVE(elementName,"no_pass");
  _CLASS_CHECK_REMOVE(elementName,"pass");
}
function check(el){
  let err_box = el.parentElement.nextElementSibling;
  if(el.id=="phone" && el.value == ''){
    _CLASS_INIT(err_box);
    return;
  }
  if(!el.checkValidity()){
    _CLASS_CHANGE_NO_PASS(err_box);
  }else if(el.checkValidity() && el.value != ''){
    _CLASS_CHANGE_PASS(err_box);
  }
}
function password_check(el){
  const password = document.getElementById("password");
  const retype_password = el;
  let err_box = el.parentElement.nextElementSibling;
  if(retype_password.value == ""){
    return;
  }
  if(password.value != retype_password.value){
    _CLASS_CHANGE_NO_MATCH(err_box);
  }else if(password.value == retype_password.value){
    _CLASS_CHANGE_MATCH(err_box);
  }
}