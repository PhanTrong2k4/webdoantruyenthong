function dangki() 
{
    var tendn = document.getElementById("tendn").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var email = document.getElementById("email").value;
    var sdt = document.getElementById("sdt").value;

    if (tendn=="" || password1=="" || password2=="" || email=="" || sdt=="") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    var existingUserData = localStorage.getItem(tendn);
    if (existingUserData) {
        alert("Tên đăng nhập đã được sử dụng!");
        return;
    }


    if (password1 !== password2) {
        alert("Mật khẩu và xác nhận mật khẩu không giống nhau!");
        return;
    }


    for (var key in localStorage) {
        var userData = JSON.parse(localStorage.getItem(key));
        if (userData && userData.email === email) {
            alert("Email đã được sử dụng!");
            return;
        }
    }


    for (var key in localStorage) {
        var userData = JSON.parse(localStorage.getItem(key));
        if (userData && userData.sdt === sdt) {
            alert("Số điện thoại đã được sử dụng!");
            return;
        }
    }

    
    var user = {
        "tendn": tendn,
        "password": password1,
        "email": email,
        "sdt": sdt
    };

    localStorage.setItem(tendn, JSON.stringify(user));

    document.getElementById("tendn").value = '';
    document.getElementById("password1").value = '';
    document.getElementById("password2").value = '';
    document.getElementById("email").value = '';
    document.getElementById("sdt").value = '';

    alert("Đăng kí thành công!");
}



function dangnhap() 
{
    var tendn = document.getElementById("tendn").value;
    var password = document.getElementById("password1").value;
    
    var userJson = localStorage.getItem(tendn);
    var user = JSON.parse(userJson);
    if (tendn=="" || password=="") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    if (user==null) 
    {
        alert("Sai tên đăng nhập hoặc mật khẩu");
    }
    else if (user.password === password && user.tendn == tendn) {
        document.getElementById("tendn").value = '';
        document.getElementById("password1").value = '';
        alert("Đăng nhập thành công!");
        
        window.open("http://127.0.0.1:5500/baitapcuoikyweb.html");
    }
    else{
        alert("Sai tên đăng nhập hoặc mật khẩu");
    }
    
}

function quenmatkhau() 
{
    var tendn = document.getElementById("tendn").value;
    var email = document.getElementById("email").value;
    var userJson = localStorage.getItem(tendn);
    var user = JSON.parse(userJson);
    if (tendn==""|| email=="") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    if (user == null) 
    {
        alert("Sai tên đăng nhập hoặc email!");
    }
    else if(user.email==email && user.tendn == tendn) 
    {
        document.getElementById("tendn").value = '';
        document.getElementById("email").value = '';
        alert("Một tin nhắn đã được gửi tới email của bạn, vui lòng kiểm tra!");
    }
    else if(user.email!=email || user.tendn != tendn)
    {
        alert("Sai tên đăng nhập hoặc email!")
    }
}

function togglePassword1() {
    var passwordField = document.getElementById("password1");

    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function togglePassword2() {
    var passwordField = document.getElementById("password2");

    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
