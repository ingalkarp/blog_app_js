$(document).ready(() =>{
    $('#button').click((e)=>{
        e.preventDefault();     
        var username=$('#user-id').val();
        var password=$('#pass-id').val();

        var loginObj = {
            "username" :username,
            "password":password
        }
        localStorage.setItem('userObj',JSON.stringify(loginObj));

        if(username=="" && password==""){
            $('#message').html("enter both the details");
        }

        else if(username=="" || password==""){
            if(username==""){
                $('#uname-s').html("enter username");
            }
            else if(password==""){
                $('#pass-s').html("enter password")
            }
        }

       else{
    $.ajax({
        url:"http://localhost:3000/users",
        method:"GET",
        dataType:'json',


        success:(data)=>{
            //console.table([data]);
            $.each(data, function(index, value){
                if(value.username != "" && value.password != ""){
                    if(value.username == username && value.password==password){
                        
                         if(value.actor=='user'){
                             //sessionStorage.setItem('username',username);
                            alert("Welcome user "+value.username);
                            window.location = "../HTML/healthBlogAfter.html"
                            return false;
                        }
                        
                    }
                    else{   
                        if((data.length-1)===index){
                            alert("invalid credential")
                            return false;
                        }
                           
                   }
                }
            })
        },
        error:(e)=>{
            alert("Error  invalid credentials: "+e);
            
        }
    }) 

}
         

    })

})