$(document).ready(()=>{
    
    $('#register').click((e)=>{
        e.preventDefault();

        let users= {}
    users.firstname= $('#first-id').val();
    users.lastname=$('#last-id').val();
    users.email=$('#email-id').val();
    users.actor="user";
    users.username=$('#user-id').val();
    users.password=$('#pass-id').val();
    // var confirmPass=$('#cpass-id').val();
   
    //let userObj = JSON(users);
    // console.log(firstname);
    // console.log(lastname);
    // console.log(email);
    // console.log(username);
    // console.log(password);

    if(users.firstname=="" && users.lastname=="" && users.email=="" && users.username=="" && users.password==""){
        $('#message').html('Fill all the fields')
    }

    else if(users.firstname=="" || users.lastname=="" || users.email=="" || users.username=="" || users.password==""){

        if(users.firstname==""){
            $('#fname-s').html('please fill firstname');
        }
        else if(users.lastname==""){
            $('#lname-s').html('please fill lastname');
        }
        else if(users.email==""){
            $('#email-s').html('please fill email');
        }
        else if(users.username==""){
            $('#uname-s').html('please fill username');
        }
        else if(users.password==""){
            $('#pass-s').html('please enter password');
        }
    }

    //sending request to server
    else{
    $.ajax({
        url:"http://localhost:3000/users",
        method:"POST",
        data: users,      
        dataType: "json",
        success:(x)=>{
            alert(username+" your Registration is successful");
            console.log(x);
            // window.location ="../html/login.html"
            return false;
        },
        error:(e)=>{
            alert("Error : "+e)
        }
    })
}

    })
  
})













// // validation part start
// if(firstname==""){
//     $('#fname-s').html('** please insert firstname');
// }
// if(firstname.length <2 || firstname.length>20){
//     $('#fname-s').html('** firstname length must be between 2 and 20');
// }
// if(!isNaN(firstname)){
//     $('#fname-s').html('** firstname must contain only characters');
// }

// if(lastname==""){
//     $('#lname-s').html('** please insert lastname');
// }
// if(lastname.length <2 || lastname.length>20){
//     $('#lname-s').html('** lastname length must be between 2 and 20');
// }
// if(!isNaN(lastname)){
//     $('#lname-s').html('** lastname must contain only characters');
// }

// if(email==""){
//     $('#email-s').html('** please insert firstname');
// }
// if(email.indexOf('@')<=0){
//     $('#email-s').html("**  @ invalid position ");
// }
// if((email.charAt(email.length-4) !='.')&& (email.charAt(email.length-3) !='.')){
//     $('#email-s').html('** . Invalid Position ');
// }

// if(username==""){
//     $("uname-s").html("** Please fill the user field"); 
// }
// if((username.length <=5) || (username.length >20)){
//     $("uname-s").html(" ** user name length must be between 5 and 20");
// }
// if (!isNaN(username)) {
//     $("uname-s").html(" ** only characters are allowed");
// }


// if(password==""){
//     $("pass-s").html("** Please fill the password field"); 
// }
// if((password.length <=5) || (password.length >20)){
//     $("pass-s").html(" ** password length must be between 5 and 20");
// }


// if(confirmPass==""){
//     $("cpass-s").html("** Please fill the confirm password field"); 
// }

// if(password != confirmPass){
//     $('#cpass-s').html("** Password are not matching."); 
// }
// //validation part end