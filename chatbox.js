function luachon1()
{
   var x =  document.querySelector("#dongchatht");
   var bansaox = x.cloneNode(true);
   bansaox.id="dongchatht";
   x.innerHTML="Cửa hàng mở vào lúc 11h sáng tới 11h tối";
   x.id="999"
   document.querySelector(".khungchatbox").appendChild(bansaox);
   var luuquery = document.querySelector(".chatuser");
}
function luachon2()
{
    var x =  document.querySelector("#dongchatht");
    var bansaox = x.cloneNode(true);
    bansaox.id="dongchatht";
    x.innerHTML="Địa chỉ cửa hàng là 125 Trương Công Định";
    x.id="999"
    document.querySelector(".khungchatbox").appendChild(bansaox);
    var luuquery = document.querySelector(".chatuser");
}
function luachon3()
{
    var x =  document.querySelector("#dongchatht");
    var bansaox = x.cloneNode(true);
    bansaox.id="dongchatht";
    x.innerHTML="Vui lòng gọi cho đường dây hỗ trợ trực tuyến của cửa hàng là: <u>'883203231'</u>";
    document.querySelector(".khungchatbox").appendChild(bansaox);
    x.id="999"
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