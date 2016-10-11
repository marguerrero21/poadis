
function clickScroll(element){
    var temp = document.getElementById(element);
    if(temp === null){
        window.location = "index.html#"+element;
    }
    else{
        $('html, body').animate({ scrollTop: $("#"+element).offset().top}, 800);
    }
}

function triggerAlert(){
    // $('#myModal').modal('show');
}

$(document).ready(function(){
    $('.temp').tooltip({title: "<img src=\"img/AboutUs.png\" style=\"height:50px;padding:0px;margin:0px;\">", html: true, placement: "right"});    

 //    $('#POADIS_howto_userview_I_f2').collapse({
    //  toggle: false
    // })
});

function loadvideoUrl(id){
    if($("#video_curr_play").length )
        document.getElementById("video_curr_play").src = "https://www.youtube.com/embed/"+id;
    // }
}
loadvideoUrl("DBdTFj3x2dQ");


(function() {
    var Website = {

        init : function(){
            Website.config = {
                'endpoint' : "http://api-dev.poadis.com/api/contact",
                'token'    : "uDuwWqWgVJYOs94kS6bWX5JscWd+EMV4YKjuaUAXZXwA5LkfuF2RyBhqyKyMQqypoe7JWUJFXLpd+y1arh3BqAu1hvloWbzKipHqAkIi//xoKrZrP/udth/FrP19vkpLXR9gVb3NcJK2pJ3B+3TNr/zfildTi5Mqzpml00UnTTYyxYUoYUb324NPqil5cno2OPAZRrWtgMVC/GAP0eKSR+vY6iar53k9JGyb8GJM8sYASGHS+3z3lfZU1lDHZGVuiqn/r6K11OzjLcX4P0VLKs/yYLoq6QlyukoNa2QMkc1vqPMuWrpjXmVPuK6c+CWFXWSZeBD0ZY3UxXzNnPJxDbsSYVAIa7ZcO0JNVfCu1zw2ZOgEgEKGQc3xPqGq6HwKHPcUVoTSw353ryaAoa6YGtalnX8tIgD7qucLqChcYkn2bz3DoyXx3nPnoaiyKq6aSDjO9S1OQp7Xx7awQtH+KcbuZ/FSpqyp4z8mx7E4k7natgmjekIvEd6dgWr/y7Qv+0c5kGHLZQthS7WjZGrjh90i8rOplt801mpwlCOj6nP/N/jm2cJy2v6URv2aPM1EB2eK0VkBvzGohIKZO1Uc8l7vdWS7oBuvbyZ3aJ4xpce4skEemxj+Cn/3XuV62yGqvvVRBe25tecErthPOWwyAtR1DVLsyMSS+YaTqAxBN1g="    
            };
            
            Website.bindUiActions();

            return;
        },

        bindUiActions : function(){

            $('#submit-contact').on('click', Website._submitContact);
        },

        _submitContact : function(){
            var formData = $("#contact-form").serialize();

            var headers   = {
                "Content" : "application/json",
                "Authorization" : "Bearer " + Website.config.token,
                "Content-Type"  : "application/x-www-form-urlencoded"
            };

            Website._loading();

            $.ajax({
                url  : Website.config.endpoint,
                type : 'POST',
                data : formData,
                headers : headers,
                crossDomain: true,
                success : function(){
                    Website._showMsg();
                },
                error  : Website._errorMsg
            });

        },

        // Executes before ajax request
        _loading : function(){
            console.log("Loading...");
        },

        // Executes after ajax request
        _showMsg : function(){
            console.log("Contact Saved")

        },

        // Executes if ajax request failed
        _errorMsg : function(){
            console.log("Error Found");
        }

    };

    Website.init();
}());