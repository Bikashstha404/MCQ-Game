function register() {
    const name_data = document.querySelector("#name")
    const email_data = document.querySelector("#email")
    const password_data = document.querySelector("#password")
    const confirm_password_data = document.querySelector("#confirm_password")

    let name = name_data.value
    let email = email_data.value
    let password = password_data.value
    let confirm_password = confirm_password_data.value

    let user_data_array = JSON.parse(localStorage.getItem("user_data")) || [];
    
    if (!name || !email || !password || !confirm_password) {
        alert("All fields must be completd.")
        return
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Invalid Email Format")
        return
    }

    if(password != confirm_password){
        alert("Both password doesn't match. Please check again.")
        return
    }

    for(let i=0; i < user_data_array.length; i++){
        if(user_data_array[i].email == email){
            alert("The email is already in use.")
            return
        }
    }
    const user_data = {
        name: name,
        email: email,
        password: password
    }

    user_data_array.push(user_data);
    localStorage.setItem("user_data", JSON.stringify(user_data_array));
    alert("Data saved successfully")

    name_data.value = "";
    email_data.value = "";
    password_data.value = "";
    confirm_password_data.value = "";
}