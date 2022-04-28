// function getImage(imagepath){
//     var imagepath = $('.firstimage').val();
//     console.log(imagepath);
// }


// Add TemplateFunction
$(document).ready(
    () => {
        
    var blog = {};
    //postTemplate();
    postToClient();
    $("input[type='button']").click((e) => {
        e.preventDefault();
        blog.image = $("input[name='firstimage']").val().replace(/^.*\\/,"../pictures/");
        blog.title = $("input[name='entertitle']").val();
        blog.category = $("#category").val();
        blog.blogText = $("textarea[name='explain']").val();

        var timestamp = new Date();
        timestamp.toLocaleString()     // "8/12/2013 18.55.38" on my system
        

        blog.timestamp = timestamp;



        // var files = $('#file')[0].files[0];
        // fd.append('file', files);
        var imageObj = JSON.stringify(blog);
        console.log(imageObj);
        $.ajax({
            url: "http://localhost:3000/blogs",
            type: "POST",
            data: imageObj,
            contentType: 'application/json; charset=utf-8',
            success: function() {
                alert("Saved Succesfully");
                console.log(imageObj);
                //postTemplate();
                postToClient();
            },
            error: function() {
                alert("Error Registering");
            }
        })
    })
})





//Upload Template to Client Side
function postToClient() {
    $.ajax({
        url: "http://localhost:3000/blogs",
        method: "GET",
        dataType: "json",
        success: function(data) {
            var imageBody = $('.details');
            imageBody.empty();
            $(data).each(function (index, element) {
                console.log(element.image)
                imageBody.append(
                    // '<div class="new-common"><a href="../html/teacher/teacher.html">'+`<img id="imgTemp" src="${element.image}" class="card-img-top img-fluid img-thumbnail">`+'</a>'+'<h3 class="mycard-title">'+`${element.title}`+'</h3>'+'<p class="mycard-text">'+`${element.desc}`+'</p></div><hr>'
                    '<div class="new-common"><a href="../HTML/healthBlogAfter.html">'+`<img id="imgTemp" src="${element.image}" class="imageAfter">`+'</a>'+'<h3 class="mycard-title">'+`${element.title}`+'</h3>'+'<p class="mycard-text">'+`${element.blogText}`+'</p> </div><hr>'

                    );
                
            })
        },
        error: function (error) {
            alert(error);
        }
    })
}






 
