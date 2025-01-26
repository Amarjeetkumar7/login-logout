// const { Button } = require("./bootstrap");

//all global variable define here
let allUserInfo=[];
let regForm=document.querySelector(".reg-form");
let loginForm=document.querySelector(".login-form");
let allInput=document.querySelectorAll("input")//define all elemnt present in form
let allLoginInput=document.querySelectorAll(".login-form input")//define all elemnt present in form
let regBtn=regForm.querySelector("button")
let loginBtn=loginForm.querySelector("button")

// console.log(allLoginInput)

//getting data from local storage
if(localStorage.getItem("allUserInfo")!=null){
  allUserInfo=JSON.parse(localStorage.getItem("allUserInfo"))
}
// console.log(allUserInfo)


// /regestration coding
regForm.onsubmit=(e)=>{
  e.preventDefault() //to prevent reload after on submit click
//  let data={  //fro taking data that user write
//   YourName:allInput[0].value,
//   HoteName:allInput[1].value,
//   noRoom:allInput[2].value,
//   Mobile:allInput[3].value,
//   Email:allInput[4].value,
//   Password:allInput[5].value,
//  }
//  console.log(data)

// now using loop we can get data..


let checkEmail=allUserInfo.find((data)=>{
  return data.email==allInput[4].value
})
if(checkEmail==undefined){
  let data={};
  for(let el of allInput){
    let key=el.name;
    data[key]=el.value
  }
   regBtn.innerText="Processing..."
   setTimeout(()=>{
    regBtn.innerText="Register"
    allUserInfo.push(data);
    localStorage.setItem("allUserInfo",JSON.stringify(allUserInfo))
    swal ("Good Job!",'Ressiter succesful','success');
   },2000)
}
else{
  swal ("Oops!",'Email already exist','error')
}
}


//login coding
loginForm.onsubmit=(e)=>{
  e.preventDefault() //to prevent reload after on submit click
 if(allLoginInput[0].value!==""){
    if(allLoginInput[1].value!==""){
    //  checking Email in data base...
    let checkEmail=allUserInfo.find((data)=>{
      return data.email==allLoginInput[0].value
    });
    if(checkEmail!==undefined){
      //  match password
      if(checkEmail.password==allLoginInput[1].value){
         //writing please wait to fetch data
         loginBtn.innerText="Processing..."
         setTimeout(()=>{
          loginBtn.innerText="Login"
          window.location="profile/profile.html"   //used to send on different location after login press
          checkEmail.password=null;
          sessionStorage.setItem("__au__",JSON.stringify(checkEmail))
         },2000)
         
      }
      else{
        swal("warning ","wrong password","error")
      }
    }
    else{
      swal("warning ","email not exist","error")
    }
    }
    else{
      swal("warning ","enter password","error")
    }
 }
 else{
  swal("warning ","empty email","error")
 }

}