function dangki() 
{
    var tendn = document.getElementById("tendn").value;
    var password1 = document.getElementById("password1").value;
    var email = document.getElementById("email").value;
    var sdt = document.getElementById("sdt").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    if (password1 !== password2) {
        alert("Mật khẩu và xác nhận mật khẩu không giống nhau!");
        return;
    }

    var existingUserData = localStorage.getItem(tendn);
    if (existingUserData) {
        alert("Tên đăng nhập đã được sử dụng!");
        return;
    }


    for (var key in localStorage) {
        var userData = JSON.parse(localStorage.getItem(key));
        if (userData && userData.email === email) {
            alert("Email đã được sử dụng!");
            return;
        }
    }

    var user = {
        "tendn": tendn,
        "password": password1,
        "email": email,
        "sdt": sdt,
        "gender": gender
    };

    localStorage.setItem(tendn, JSON.stringify(user));

    document.getElementById("tendn").value = '';
    document.getElementById("password1").value = '';
    document.getElementById("password2").value = '';
    document.getElementById("email").value = '';
    document.getElementById("sdt").value = '';
    document.getElementById("gender1").checked = false;
    document.getElementById("gender2").checked = false;

    alert("Đăng ký thành công!");
}

function dangnhap() 
{
    var tendn = document.getElementById("tendn").value;
    var password = document.getElementById("password1").value;
    var userJson = localStorage.getItem(tendn);
    var user = JSON.parse(userJson);
    if (user==null) 
    {
        alert("Sai tên đăng nhập hoặc mật khẩu");
    }
    else if (user.password === password && user.tendn == tendn) {
        document.getElementById("tendn").value = '';
        document.getElementById("password1").value = '';
        alert("Đăng nhập thành công!");
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
    if (user == null) 
    {
        alert("Email không tồn tại!");
    }
    else if(user.email==email && user.tendn == tendn) 
    {
        document.getElementById("tendn").value = '';
        document.getElementById("email").value = '';
        alert("Một tin nhắn đã được gửi tới email của bạn, vui lòng kiểm tra!");
    }
}

function togglePassword1() {
    var passwordField = document.getElementById("password1");
    var toggleButton = document.getElementById("toggleButton");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.textContent = "Ẩn mật khẩu";
    } else {
        passwordField.type = "password";
        toggleButton.textContent = "Hiện mật khẩu";
    }
}

function togglePassword2() {
    var passwordField = document.getElementById("password2");
    var toggleButton = document.getElementById("toggleButton");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.textContent = "Ẩn mật khẩu";
    } else {
        passwordField.type = "password";
        toggleButton.textContent = "Hiện mật khẩu";
    }
}
