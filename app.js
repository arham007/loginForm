var error = document.getElementById("error");
var sucess = document.getElementById("sucess");
var email = document.getElementById("email");
var password = document.getElementById("password");
var flag = false;
var interval;
var users = [];
function signUp() {
    var users = JSON.parse(localStorage.getItem("user")) || [];
    for (var i = 0; i < users.length; i++) {
        if (email.value == users[i].email) {
            flag = true;
            interval =setInterval(() => {
                error.innerHTML ="<i class='fas fa-exclamation-triangle'></i>   "+ email.value + " is already excess";
                error.className=" show";
                error.style.color=" red";
                
            }, 1000);
           setTimeout(() => {
               clearInterval(interval);
                error.innerHTML="";
               
           }, 10000);


        }
    }


    if (flag == false) {

        users.push({

            email: email.value,
            password: password.value
        });
        var a = JSON.stringify(users);
        localStorage.setItem("user", a);
        sucess.innerHTML=" <i class='fas fa-check-circle'></i> Account created Successfully";
        sucess.className=" show";

    }


}

function login(){
    var check=JSON.parse(localStorage.getItem("user"));
    
    for (var i=0;i<check.length;i++){
        if(email.value==check[i].email && password.value==check[i].password){
            flag=true;
            interval=setInterval(() => {
                sucess.innerHTML="<i class='far fa-thumbs-up'></i>  You are Login successfully";
                sucess.className=" show";
                sucess.style.color=" green";
                
            }, 1000);

            setTimeout(() => {
               clearInterval(interval) 
               sucess.innerHTML="";
               
            }, 5000);
         
          
        }
    }

    if(flag==false){
        interval =setInterval(() => {
            error.innerHTML="<i class='fas fa-exclamation-triangle'></i> you enter incorect email and password";
            error.className=" show";
            error.style.color=" red";
            email.value="";
            password.value="";  
            
        }, 1000);

        setTimeout(() => {
            clearInterval(interval)
            error.innerHTML="";
            
        }, 10000);
    }
}