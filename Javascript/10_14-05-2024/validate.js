// click on button
function validate() {
    var fname = document.getElementById("fname");
    if (fname.value == "") {
        document.getElementById("msg1").innerHTML = "Enter name"
        fname.classList.add("error")
        fname.focus();
    } else {
        document.getElementById("msg1").innerHTML = null
        fname.classList.remove("error")
    }

    var num = document.getElementById("no");
    if (num.value == "") {
        document.getElementById("msg2").innerHTML = "Enter number"
        num.focus()
        num.classList.add("error")
    } else {
        document.getElementById("msg2").innerHTML = ""
        num.classList.remove("error")
    }
    return false
}

// pattern
function namePattern() {
    var fname = document.getElementById("fname");
    var ptn = /^[a-zA-Z.\s]*$/
    if (!ptn.test(fname.value)) {
        document.getElementById("msg1").innerHTML = "Invalid name!!!"
        fname.classList.add("error")
    } else if (fname.value.length < 6) {
        document.getElementById("msg1").innerHTML = "Enter minimum 6 character";
        fname.classList.add("error")
    } else {
        document.getElementById("msg1").innerHTML = null;
        fname.classList.remove("error")
    }
    return false
}
function mobilePattern() {
    var num = document.getElementById("no");
    var mptn = /^[0-9]*$/
    var start = /^[6-9]/
    if (!mptn.test(num.value) || !start.test(num.value)) {
        document.getElementById("msg2").innerHTML = "Invalid number!!!"
        num.classList.add("error")
    } else if (num.value.length < 10) {
        document.getElementById("msg2").innerHTML = "Enter 10 digits"
        num.classList.add("error")
    } else {
        document.getElementById("msg2").innerHTML = null
        num.classList.remove("error")
    }
}