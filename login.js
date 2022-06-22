function LoginSubmit(email,password){
    var arr=
    {
        Email:email,
        Password:password
    };

    $.ajax({
        url: 'https://localhost:7023/api/user',
        type: 'POST',
        data: JSON.stringify(arr),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data){
            if(data.loginsuccess)
            {
                $.cookie('session', data.session);
                window.location ="/account.html";
            }
        }

    });    
 }
 $( document ).ready(function() {
    var arr=
    {
        Session: $.cookie('session')
    };
    var pathname = $(location).attr('pathname');
    $.ajax({
        url: 'https://localhost:7023/api/session',
        type: 'POST',
        data: JSON.stringify(arr),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data){
            if(data.loginsuccess)
            {
                document.getElementById('login-member-center').innerHTML ="會員中心";
                $( "#login-member-center").attr("href","/account.html");
                $( "#lnavbarliItems").append('<li class="nav-item"><a class="nav-link active" href="/buy.html">購買</a></li>');
                if(pathname=="/login.html")
                {
                    window.location ="/account.html";
                }
            }
            else
            {
                if(pathname=="/account.html")
                {
                    window.location ="/login.html";
                }
            }

        }

    });
});