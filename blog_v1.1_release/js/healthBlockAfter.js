
// Add BlogTemplateFunction
$(document).ready(
    () => {
        
    var images = {};
    postTemplate();
    postToClient();
    $("input[type='button']").click((e) => {
        e.preventDefault();
        images.image = $("input[name='firstimage']").val().replace(/^.*\\/,"../pictures/");
        images.title = $("input[name='entertitle']").val();
        images.desc = $("input[name='explain']").val();
        // var files = $('#file')[0].files[0];
        // fd.append('file', files);
        var imageObj = JSON.stringify(images);
        console.log(imageObj);
        $.ajax({
            url: "http://localhost:3000/images",
            type: "POST",
            data: imageObj,
            contentType: 'application/json; charset=utf-8',
            success: function() {
                alert("Saved Succesfully");
                console.log(imageObj);
                postTemplate();
                postToClient();
            },
            error: function() {
                alert("Error Registering");
            }
        })
    })
})


$(document).ready(
    () => {
        
        $('#addBlogBtn').click((e) => {
            var imageBody = $('.details');
            imageBody.empty();
            //  $(data).each(function (index, element) {
                // console.log(element.image)
                imageBody.append(
                    // '<div class="new-common"><a href="../html/teacher/teacher.html">'+`<img id="imgTemp" src="${element.image}" class="card-img-top img-fluid img-thumbnail">`+'</a>'+'<h3 class="mycard-title">'+`${element.title}`+'</h3>'+'<p class="mycard-text">'+`${element.desc}`+'</p></div><hr>'
                    //'<div class="new-common"><a href="../HTML/healthBlogAfter.html">'+`<img id="imgTemp" src="${element.image}" class="imageAfter">`+'</a>'+'<h3 class="mycard-title">'+`${element.title}`+'</h3>'+'<p class="mycard-text">'+`${element.blogText}`+'</p> </div><hr>'
                    '<iframe src="../HTML/addBlog.html" frameborder="0"></iframe>'

                    );
                
            // })
        })
        $.ajax({
            url: "http://localhost:3000/images",
            type: "POST",
            data: imageObj,
            contentType: 'application/json; charset=utf-8',
            success: function() {
                alert("Saved Succesfully");
                console.log(imageObj);
                postTemplate();
                postToClient();
            },
            error: function() {
                alert("Error Registering");
            }
        })
    })
//})




function searchCategory() {
    var category = $('#category').val();
    $.ajax({
        url: "http://localhost:3000/blogs",
        method: "GET",
        dataType: "json",
        success: function(data) {
            var imageBody = $('.details ');
            imageBody.empty();
            $(data).each(function (index, element) {
                console.log(element.image)
                if(element.category===category){
                    imageBody.append(
                        '<div class="new-common"><a href="../HTML/healthBlogAfter.html">'+`<img id="imgTemp" src="${element.image}" class="imageAfter">`+'</a>'+'<h3 class="mycard-title">'+`${element.title}`+'</h3>'+'<p class="mycard-text">'+`${element.blogText}`+'</p> </div><hr size=10>'
                        //'<div class="row"><div  class="new-common col"><a href="../html/teacher/teacher.html">'+`<img id="imgTemp" src="${element.image}" class="card-img-top img-fluid img-thumbnail">`+'</a>'+'<h3 class="mycard-title">'+`${element.title}`+'</h3>'+'<p class="mycard-text">'+`${element.desc}`+'</p> </div><div class="col"><button id="readmore" onClick="readMore()">read more</button></div></div><hr>'
    
                        );
                }
                
            })
        },
        error: function (error) {
            alert(error);
        }
    })
}