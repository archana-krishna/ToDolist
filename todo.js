let uname  = document.getElementById('uname');
let passwordx     = document.getElementById('passwordx');



function  loginValidation(callback)
 {
     console.log("Archana krishna");
    if (uname.value.trim()=="" || passwordx.value.trim()=="") {
       // console.log("archanaKrishna");
        document.getElementById('uError').innerHTML="**this field cannot be empty";
        document.getElementById('passError').innerHTML="**this field cannot be empty";
        return false
    }
   else if(uname.value!="admin") {
        document.getElementById('uError').innerHTML="Invalid username";
        return false
    }
   else if(passwordx.value!="12345"){
    // document.getElementById('emailerror').innerHTML="";
    document.getElementById('passError').innerHTML="Invalid password";
    return false
   }else if(uname.value=="admin" && passwordx.value=="12345"){
       console.log("aishu");
    document.getElementById('uError').innerHTML="";
    document.getElementById('passError').innerHTML="";
    callback();
    
   }
   
}
 
 function display(){
     console.log("Archana");
   window.open('./todolist.html');
    

 }
 
