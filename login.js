function Validate() {
    
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("passwordverify").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    else if( document.getElementById("email").value=="a@a.a" ){
        alert("Login with Google Required");
        return false;
        
    }
    return true;
}


    
        
