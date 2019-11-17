
function createCookie(cookieName,cookieValue,daysToExpire)
{
  var date = new Date();
  date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
  document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
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

$(document).ready(function(){
  
    if(accessCookie("pengguna") != ""){
        $('#menuLogin').html("logout");
        $('#menuSign').hide();
    };
    $(window).ready(function(){
        $('.logo').addClass('slide-right');
    });
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
            if(mail=="vocadu@gmail.com" & passwd=="12345678"){
                  var user = accessCookie("pengguna");
                  if (user!=""){
                    alert("anda suda login " + user + "!!!");
                  }else
                  {
                    createCookie("pengguna", passwd, 1);
                  }
                $(location).attr('href','materi.html');
    }else{
            alert("username/password salah\n username:vocadu@gmail.com\n password:12345678");
        };

    });
});

