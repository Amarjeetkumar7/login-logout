//all global variable
let userInfo;
let navBrand=document.querySelector(".navbar-brand")
let logoutBtn=document.querySelector(".logout-btn")
//check llogut login
if(sessionStorage.getItem("__au__")==null){
  window.location="../index.html";
}
userInfo=JSON.parse(sessionStorage.getItem("__au__"))
navBrand.innerHTML=userInfo.HotelName
//logout coding

logoutBtn.onclick= ()=>{
  // alert()
  logoutBtn.innerHTML="Please wait...";
  setTimeout(()=>{
    logoutBtn.innerHTML="Logout"
    sessionStorage.removeItem("__au__");
    window.location="../index.html"
},3000)
}
