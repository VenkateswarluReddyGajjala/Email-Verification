const fname=document.getElementById('fname');
// console.log(fname);
const phone=document.getElementById('phone');
const uname=document.getElementById('uname');
const email=document.getElementById('email');
const password=document.getElementById('password');
console.log(password);
const confirmpassword=document.getElementById('cpassword');
console.log(confirmpassword);

const su1=document.getElementById('su1')
const form = document.getElementById('btn');
const otp=document.getElementById('otp');
const checking=document.getElementById('checking');
const otpcheking=document.getElementById('otpcheking');
const emailverified=document.getElementsByClassName('emailverified')[0];
const invalid =document.getElementById('invalid');
const provideemail =document.getElementById("provideemail");
const btn1 =document.getElementById("btn1");
const match1 =document.getElementById("match1")
const match2 =document.getElementById("match2")
form.addEventListener('click',e=>{
    // console.log("hii");
    e.preventDefault();
     const send =otp.classList.toggle(true)
        if(email.value !== ""){
            if(send){
                provideemail.style.display='none'      
                sendMail();
                otp.style.display="block"
           }else{
                otp.style.display="none"
           }
        }else{
            provideemail.style.display='block'
        }

})  
// otp genareted
function genotp(){
    let otp =Math.trunc(Math.random()*10000)
    if(otp>999&&otp<10000){
        console.log(otp);
        localStorage.setItem("otp",otp);
        return otp;
    }else{
        genotp();
    }
}
// send otp email
function sendMail(){
     var param={
        email:document.getElementById('email').value,
        message:genotp(),
        fname:document.getElementById('fname').value
     }
const serviceid='service_cxslpll';
const templeteid='template_g784ogt';
// emailjs 
  emailjs.send(serviceid,templeteid,param)
        .then(
            res=>{
             alert("your massage sent successfully..")
             console.log(res)
            }
        ).catch((erro)=>console.log("error"));
    }

    su1.addEventListener('click',e=>{
         e.preventDefault();
        const check = localStorage.getItem("otp")
        console.log(check);
         if(checking.value===check){
            emailverified.style.display='block'
            buttonSubmit()
            btn1.style.backgroundColor="blue";
            otp.style.display="none"
         }else{
            invalid.style.display='block';
         }
    })

    btn1.addEventListener("click",(e)=>{
        e.preventDefault();
buttonSubmit()
    })


    function buttonSubmit(){
        if(fname.value!==""||phone.value!==""||uname.value!==""||email.value!==""||password.value!==""||confirmpassword.value!==""){
            if(emailverified.style.display==="block"){
                console.log("hii");
                if (password.value === confirmpassword.value && password.value!=="" && confirmpassword !=="") {
                    btn1.style.cursor="pointer";
                    btn1.style.backgroundColor="blue";
                    match2.style.display="block"
                    match1.style.display="none"
                    localStorage.setItem("fname",fname.value)
                      localStorage.setItem("phone",phone.value)
                     localStorage.setItem("uname",uname.value)
                        localStorage.setItem("email",email.value)
                      localStorage.setItem("password",password.value)
                  localStorage.setItem("confirmpassword",confirmpassword.value)
                }else{
                    btn1.style.cursor="no-drop";
                    btn1.style.backgroundColor="#979A9A";
                    match1.style.display="block"
                    match2.style.display="none"
                }
            }else{
                alert("please verify your email")
            }
           
           }
          else{
                alert("fill all blocks")
                btn1.style.cursor="no-drop";
                 btn1.style.backgroundColor="#979A9A";
               }
    }
    