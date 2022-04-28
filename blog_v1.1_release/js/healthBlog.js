

    function readMore(){
        window.location="../HTML/login.html"
    }

    $(document).ready(() => {
          
            // $('#readmore').click((e)=> {
            //     e.preventDefault();
            //     window.location="../HTML/login.html";
   
            // })
            
         
         
            $.ajax({
                url: "http://localhost:3000/blogs",
                method: "GET",
                dataType: "json",
                success: function(data) {
                    var blockBody = $('#tblTemplate');
                    blockBody.empty();
                   
                    $(data).each(function (index, element) {
                        console.log(element.title)

                        blockBody.append(
                            // '<div class="new-common"><a href="/">'+`<img id="imgTempl" src="${element.image}" class="card-img-top img-fluid img-thumbnail">`+'</a>'+'<h3 class="mycard-title">'+`${element.title}`+'</h3>'+'<textarea class="mycard-text">'+`${element.blogText}`+'</textarea></div></div><hr>'
                            //'<div class="new-common"><a href="/">'+`<img id="imgTempl" src="${element.image}" class="card-img-top img-fluid img-thumbnail">`+'</a>'+'<h3 class="mycard-title">'+`${element.title}`+'</h3>'+'</div></div><hr>'
                            //'<div class="row"><div  class="new-common col">'+`<img id="imgTemp" src="${element.image}" class="card-img-top img-fluid img-thumbnail">`+'<h3 class="mycard-title">'+`${element.title}`+'</h3>'+'<p class="mycard-text">'+`${element.blogText}`+'</p> </div> '+ '<div class="col-1">' + '<button id="readmore" onClick="readMore()">read more</button>'+ '</div></div><hr>'
                            //'<div class="row"><div  class="new-common col"><a href="../HTML/healthBlog.html">'+`<img id="imgTemp" src="${element.image}" class="card-img-top img-fluid img-thumbnail">`+'</a>'+'<h3 class="mycard-title">'+`${element.title}`+'</h3>'+ '</div><div class="col-1"><button id="readmore" onClick="readMore()">read more</button></div></div><hr>'
                            //'<div class="new-common"><a href="../HTML/healthBlogAfter.html">'+`<img id="imgTemp" src="${element.image}" class="card-img-top img-fluid img-thumbnail">`+'</a>'+'<h3 class="mycard-title">'+`${element.title}`+'</h3>'+'<textarea class="mycard-text">'+`${element.blogText}`+'</textarea> </div><hr>'


                            '<div class="row"><div class="new-common-col">' + `<img id="imgTempl" class="imageAfter" src="${element.image}"  >`+ '</div>' + '<div class="col">' +'<h3 class="mycard-title">'+`${element.title}`+'</h3>' + '</div>' +'<div class="col-1">' + '<button id="readmore" onClick="readMore()">'+ 'Read More' +'</button></div></div><hr size=10>'


                            );
                    
                        
                    })
                   
                   
                },
                error: function (error) {
                    alert(error);
                }
            })
        })
 

        
    
