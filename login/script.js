function login(){
    email_data = document.querySelector("#email");
    password_data = document.querySelector("#password");

    email = email_data.value
    password = password_data.value

    let user_data_array = JSON.parse(localStorage.getItem("user_data")) || [];

    if(!email || !password){
        alert("All fields must be filled.")
        return
    }

    check_email = true;
    for(let i=0; i < user_data_array.length; i++){
        if(user_data_array[i].email == email){
            check_email = false
            if(user_data_array[i].password != password){
                alert("Incorrect Password")
                return
            }
            break
        }
    }

    if(check_email){
        alert("Provided email is incorrect.")
        return
    }

    window.location.href = "../home/index.html";
}