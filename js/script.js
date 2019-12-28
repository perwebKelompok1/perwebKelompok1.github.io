        //cookie
        function createCookie(cookieName,cookieValue,daysToExpire){
            var date = new Date();
            date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
            document.cookie = cookieName + "=" + cookieValue + "; expires="+ date.toGMTString();
          };
          function accessCookie(cookieName)
          {
            var name = cookieName + "=";
            var allCookieArray = document.cookie.split(';');
            for(var i=0; i<allCookieArray.length; i++)
            {
              var temp = allCookieArray[i].trim();
              if (temp.indexOf(name)==0)
              return temp.substring(name.length,temp.length);
          }
              return "";
          };
          // cookie
$(document).ready(function(){
    $('.materi1 .boxmateri a').click(function(){
        if(accessCookie("pengguna") == ""){
            $('.materi1 .boxmateri a').attr('href','#');
            alert("silahkan login dulu!!!!!");
        }
    });
    $('.logo').addClass('slide-right'); 
    if(accessCookie("pengguna") != ""){
        $('#menuLogin').html("logout");
        $('#menuSign').hide();
        $('.warning').hide();
    };
    $("#menuLogin").click(function(){
        if(accessCookie("pengguna") != ""){
            document.cookie = "pengguna = ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
            $(location).attr('href','index.html');
        }else{
        $('#login').css("display","block");
        }
    });
    $("#tutupModal").click(function(){
        $('#login').css("display","none");

    });
    $("#pindah").click(function(){
        var mail=$('.inputan input[type="email"]').val(),
            passwd=$('.inputan input[type="password"]').val();
            if(mail=="vocadu@gmail.com" && passwd=="12345678"){   
              createCookie("pengguna", mail, 1);
              $(location).attr('href','materi.html');
    }else{
            alert("username/password salah\n username:vocadu@gmail.com\n password:12345678");
        };

    });
    $('#submit').click(function(){
      var mail=$('#sign input[type="email"]').val(),
      passwd=$('#sign input[type="password"]').val();
      createCookie("pengguna", mail, 1);
      $(location).attr('href','materi.html');   
    });
    $('#more').click(function(){
        $("#more").hide();
        $(function() {
            ajaxJS();
            function ajaxJS(e) {
              if (e) {
                e.preventDefault();
              }
              $.ajax({
                url: "https://raw.githubusercontent.com/suainul1/suainul1/master/suainul.json",
                method: "GET",
                success: function(data) {
                  console.log(data);
                  data = jQuery.parseJSON(data);
                  var html_to_append = '';
                  $.each(data, function(i, item) {
                    html_to_append +=
                    '<div class="boxmateri">'+'<img src='+item.img+' '+'alt="">'
                     + 
                     '<h4>'+item.judul+'</h4>' +
                    '<p>'+item.isi+'</p>'+
                    '<a href='+item.link+'>Baca</a>'+'</div>';
                  });
                  
                  $(".materi1").append(html_to_append);
                },
                error: function() {
                  console.log(data);
                }
              });
        
            }
        
          });
          $('.materi1 .boxmateri a').attr('href','#');
    });

    

});

