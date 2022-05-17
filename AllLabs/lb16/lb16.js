
function submitform(){
  var x = document.getElementById("before");
  if (x.stle.display === "none"){
    x.style.display = "block";
    } else { 
  x.style.display = "none"
}

//this is a function and allows us to edit stuff inside the function
function submitforum() {
    let username = document.userform.input_username.value;
    let userPhone = document.userform.input_phoneNum.value;
    let userEmail = document.userform.input_email.value;
    let usernameResult = document.getElementById("nameResult");
    let phoneResult = document.getElementById("phoneNumResult");
    let emailResult = document.getElementById("emailResult");

  
    userNameResult.innerHTML = username;
    userPhoneResult.innerHTML = userPhone;
    userEmailResult.innerHTML = userEmail;
  console.log(username,userEmail,userPhoneNum);
  document.getElementById();
}

function returnHome(){
  var x = document.getElementById("before");
  var y = document.getElementByID("after");
    if(x.style.display=)
      if(x.style.display === "none") {
        x.style.display = "block";
        x.style.opacity="1";
        y.style.display = "none";
        y.style.opacity="0";
      } else {
        x.style.display = "block";
        y.style.display = "block";
        y.style.display = "none";
      }
  
}