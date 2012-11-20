var testValidate = function() {
  toValidate = document.getElementsByName('name')[0];

  if (toValidate.value === "foo") {
    var node=document.createTextNode('An Error Message!');
    var errorField = document.getElementById("error1");
    errorField.appendChild(node);
    // alert("stuff");
    return false;
  }
  return true;
}