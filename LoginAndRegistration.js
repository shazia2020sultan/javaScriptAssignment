function login(){
    document.forms['login_form'].style.display='block';
    document.forms['register_form'].style.display='none';
    return false;
}

function register(){
    document.forms['login_form'].style.display='none';
    document.forms['register_form'].style.display='block';
    return false;
}

function validationForLogin(){
    var email_login=document.forms["login_form"]["email_login"].value;
    var password_login=document.forms["login_form"]["password_login"].value;

    if(email_login===''){
        document.getElementById('err1').style.display='block';
    }else{
        document.getElementById('err1').style.display='none';
        
    }

    if(password_login===''){
        document.getElementById('err2').style.display='block';
    }else{
        document.getElementById('err2').style.display='none';
        
    }

    var data1={
        email_login:email_login,
        password_login:password_login
    }
    console.log(data1);
    localStorage.setItem("person2",JSON.stringify(data1))

    var data2=localStorage.getItem('person2');
    var per1=JSON.parse(data2);
    console.log(per1);
    var x=document.createElement('h1');
    var per2=JSON.parse(localStorage.getItem('person1'))
    if(per2.email_register.localeCompare(per1.email_login)===0 && per2.password_register.localeCompare(per1.password_login)===0){
        x.textContent=`Hi ${per2.firstname}`
        document.body.appendChild(x);  
    }else{
        alert("Please check your details");
    }
    return false;
    
}

function validationForRegister(){
    var firstname=document.forms["register_form"]["firstname"].value;
    var lastname=document.forms["register_form"]["lastname"].value;
    var email_register=document.forms["register_form"]["email_register"].value;
    var password_register=document.forms["register_form"]["password_register"].value;

    
    if(firstname===''){
        document.getElementById('err3').style.display='block';
    }else{
        document.getElementById('err3').style.display='none';
        
    }

    if(lastname===''){
        document.getElementById('err4').style.display='block';
    }else{
        document.getElementById('err4').style.display='none';
        
    }
    
    if(email_register===''){
        document.getElementById('err5').style.display='block';
    }else{
        document.getElementById('err5').style.display='none';
        
    }

    if(password_register===''){
        document.getElementById('err6').style.display='block';
    }else{
        document.getElementById('err6').style.display='none';
        
    }


    var data={
        firstname:firstname,
        lastname:lastname,
        email_register:email_register,
        password_register:password_register
    }
    console.log(data);

    localStorage.setItem("person1",JSON.stringify(data))
    var data3=localStorage.getItem('person1');
    // var per2=JSON.parse(data3);
    // console.log(per2);
    return false;
}