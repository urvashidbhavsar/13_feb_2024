// click on button
function validate() {
    var email = document.getElementById("mail");
    if (email.value == "") {
        document.getElementById("msg1").innerHTML = "Enter Email"
        email.classList.add("error")
        email.focus();
    }

    var p = document.getElementById("pass")
    if (p.value == "") {
        document.getElementById("msg2").innerHTML = "Enter Password"
        p.classList.add("error")
    }

    var cps = document.getElementById("cpass");
    if (cps.value == "") {
        document.getElementById("msg3").innerHTML = "Re-enter Password"
        cps.classList.add("error")
    }
    return false
}

// pattern
function EmailCheck() {
    var email = document.getElementById("mail");
    var ptn = /^[a-zA-Z0-9.\.]*@[a-z]*(\.[a-z]{2,3})$/
    if (!ptn.test(email.value)) {
        document.getElementById("msg1").innerHTML = "Invalid Email!!!"
        email.classList.add("error")
    } else {
        document.getElementById("msg1").innerHTML = null
        email.classList.remove("error")
    }
}
function passwordCheck() {
    var ps = document.getElementById("pass");
    var ptn = /^[A-Z][a-z0-9!@#$%^&*]{6,16}$/
    if (!ptn.test(ps.value)) {
        document.getElementById("msg2").innerHTML = "Invalid Password!!!"
        email.classList.add("error")
    } else {
        document.getElementById("msg2").innerHTML = null
        email.classList.add("error")
    }
}
function confirmPass() {
    var ps = document.getElementById("pass");
    var cps = document.getElementById("cpass");
    if (cps.value != ps.value) {
        document.getElementById("msg3").innerHTML = "password not match"
        cps.classList.add("error")
    } else {
        document.getElementById("msg3").innerHTML = null
        cps.classList.remove("error")
    }
}

// show password
function ShowPassword() {
    var ps = document.getElementById("pass");
    var cps = document.getElementById("cpass");
    if (ps.type == "password" && cps.type == "password") {
        ps.type = "text"
        cps.type = "text"
    } else {
        ps.type = "password"
        cps.type = "password"
    }
}

// =====================================================================
// radio, checkbox, dropdown
function checkValid() {
    let m = document.getElementById("male");
    let f = document.getElementById("female");

    if (m.checked == false && f.checked == false) {
        document.getElementById("msg1").innerHTML = "Select value !!!"
    } else {
        document.getElementById("msg1").innerHTML = null;
    }

    let c1 = document.getElementById("c1");
    let c2 = document.getElementById("c2");
    let c3 = document.getElementById("c3");

    if (c1.checked == false && c2.checked == false && c3.checked == false) {
        document.getElementById("msg2").innerHTML = "Select value !!!"
    } else {
        document.getElementById("msg2").innerHTML = null;
    }

    let city = document.getElementById("clist");
    if (city.value == "-1") {
        document.getElementById("msg3").innerHTML = "select value!!!"
    } else {
        document.getElementById("msg3").innerHTML = null
    }
    return false

}