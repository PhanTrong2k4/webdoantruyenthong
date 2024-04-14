function luachon1()
{
   var x =  document.querySelector("#dongchatht");
   var bansaox = x.cloneNode(true);
   bansaox.id="dongchatht1";
   x.innerHTML="Cửa hàng mở vào lúc 10h sáng tới 11h tối";
   document.querySelector(".khungchatbox").appendChild(bansaox);
   var luuquery = document.querySelector(".chatuser");
}
function luachon2()
{
    var x =  document.querySelector("#dongchatht1");
    var bansaox = x.cloneNode(true);
    bansaox.id="dongchatht2";
    x.innerHTML="Địa chỉ cửa hàng là 128 Trương Công Định";
    document.querySelector(".khungchatbox").appendChild(bansaox);
    var luuquery = document.querySelector(".chatuser");
}
function luachon3()
{
    var x =  document.querySelector("#dongchatht2");
    var bansaox = x.cloneNode(true);
    bansaox.id="dongchatht3";
    x.innerHTML="Liên hệ đường dây hỗ trợ trực tuyến của cửa hàng là: '883203231'";
    document.querySelector(".khungchatbox").appendChild(bansaox);
    var luuquery = document.querySelector(".chatuser");
}
function hien()
{
   var x= document.querySelector(".hopchatbox");
    x.style.display="block";
}
function an()
{
    var x= document.querySelector(".hopchatbox");
    x.style.display="none";
}