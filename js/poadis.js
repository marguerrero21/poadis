
function clickScroll(element){
    $('.menu').removeClass('active');
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

// Follows Modular Pattern
(function() {
    var Website = {

        init : function(){
            Website.config = {
                'endpoint' : "//api.poadis.com/api/contact",
                'token'    : "H4i/iUJn17aZvPCCXFcvIqLMJhTiIPQ2waQtv65egjTlrgGl3UP6J5m1Wbg+UmrWr3+wWFSG4vRuEvRwnwS7BDPS594jdZjd355QNQ6nu02mau5D0q0zp3xAwdHPuN4m8pTolo/Z8XhMcwWFvg+4jS6x9AfYUL+HeD+i5+C1V7jXLcg9I8LRYVw1n2GP6oMzlJCwRAW3G5j9H7jjX40c1lKbSyJpgqetf9w6rsK4WxmUlBfPpknpkInKNMGvmhWhOU6ndMfrit5t2ovPX4zXiEBaND2j8a7R66hpNScW4tHU/eetzygFby9ALhWg657P0Vlxhk7yvMRgnFnqIqDPbfSnPXqspf3GbIAlO5M83cfNlj7o4vU4DbNoZfn1VBXpc3xO+dx9U7IrG5a5Rihd6Bcmmogr8DREekK2zKiwkNKYuDyLxKxfhNt9huhfBfg0TV4NRv540qb/MZPHGv3KLZrn1DBYwuRIg2sktKnSqEh/tRu7/+z8Mj+1hknhTQEXlzglXQao3dhbjE+SNGNzSrzJ9NE3kFEZdxQTEk6qdJtWG6dX1G7jlBZYzcanLpM2pEUW3aBc0Cti1PdoCD6paFxKacbjUPbRALwI5HLWalJGM8I/ZrteUP8Thea23B+XgX7AwwRuAdjpdcVBUDIbxOpjRg/juWPJss5BnIPWn2w="    
            };
            
            Website.bindUiActions();

            return;
        },

        bindUiActions : function(){
            $('#submit-contact').on('click', Website.submitContact);
            $(window).scroll( Website.scrollSpy );
        },

        scrollSpy     : function(){
            var currentOffset   = $(window).scrollTop();
            var aboutUsOffset   = $("#aboutus").offset().top;
            var contactUsOffset = $("#contactus").offset().top;
            
            $('.menu').removeClass('active');

            if ( currentOffset < aboutUsOffset ) {
                $("#menu-home").addClass('active'); 
            }

            else if (currentOffset >= aboutUsOffset && currentOffset < contactUsOffset ){
                $("#menu-about-us").addClass('active'); 
            }

            else if (currentOffset >= contactUsOffset){
                $("#menu-contact-us").addClass('active'); 
            }
        },

        submitContact : function(){
            var formData = $("#contact-form").serialize();

            var headers   = {
                "Content" : "application/json",
                "Authorization" : "Bearer " + Website.config.token,
                "Content-Type"  : "application/x-www-form-urlencoded"
            };

            Website._loading(this);

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
        _loading : function(btn){
            $(btn).addClass('disabled');
            $(btn).button('loading');

        },

        // Executes after ajax request
        _showMsg : function(){
            console.log("Contact Saved")
            $("#contact-form").find('input').val("");
            $("#contact-form").find('textarea').val("");
            $("#modal-success").modal();
            $('#submit-contact').removeClass('disabled');
            $('#submit-contact').button('reset');
        },

        // Executes if ajax request failed
        _errorMsg : function(jqXHR){
            $('#submit-contact').removeClass('disabled');
            $('#submit-contact').button('reset');

            var response = jqXHR.responseJSON;

            if(response.status == "failure") {
                $("#modal-invalid-form").modal();
            }
        }

    };
    // $(document).on('ready', Website.init)
    Website.init();
}());


// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-85619117-1', 'auto');
  ga('send', 'pageview');


// Hubspot Leadin : Async HubSpot Analytics Code 
(function(d,s,i,r) {
  if (d.getElementById(i)){return;}
  var n=d.createElement(s),e=d.getElementsByTagName(s)[0];
  n.id=i;n.src='//js.hs-analytics.net/analytics/'+(Math.ceil(new Date()/r)*r)+'/2315168.js';
  e.parentNode.insertBefore(n, e);
})(document,"script","hs-analytics",300000);
