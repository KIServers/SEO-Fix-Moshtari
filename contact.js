var $ = document;

var nameG = $.getElementById("name");
var phoneG = $.getElementById("phone");
var messageG = $.getElementById("message");

var nameErrG = $.getElementById("nameErr");
var phoneErrG = $.getElementById("phoneErr");
var messageErrG = $.getElementById("messageErr");

var nameRes , phoneRes , messageRes ;

// Btn Check
function btnCheck() {

    if (nameG.value.length < 3) {
        nameErrG.className = "red";
        $.getElementById("imName").className = "fas fa-times-circle";
        nameG.style.border = " 1px red solid";
        nameG.style.outline = " none";
        nameRes = false;
    }
    else {
        nameErrG.className = "green";
        $.getElementById("imName").className = "fas fa-check-circle";
        nameG.style.border = " 1px green solid";
        nameG.style.outline = " none";
        nameRes = true;
    }


    if (phoneG.value.length != 11 && phoneG.value.length != 13 || isNaN(phoneG.value) != false) {
        phoneErrG.className = "red";
        $.getElementById("imPhone").className = "fas fa-times-circle";
        phoneG.style.border = " 1px red solid";
        phoneG.style.outline = " none";
        phoneRes = false ; 
    }
    else {
        phoneErrG.className = "green";
        $.getElementById("imPhone").className = "fas fa-check-circle";
        phoneG.style.border = " 1px green solid";
        phoneG.style.outline = " none";
        phoneRes = true ; 
    }



    if (messageG.value.length < 5) {
        messageErrG.className = "red";
        $.getElementById("imMessage").className = "fas fa-times-circle";
        messageG.style.border = " 1px red solid";
        messageG.style.outline = " none";
        messageRes = false ; 
    }
    else {
        messageErrG.className = "green";
        $.getElementById("imMessage").className = "fas fa-check-circle";
        messageG.style.border = " 1px green solid";
        messageG.style.outline = " none";
        messageRes = true ; 
    }

    if (nameRes && phoneRes && messageRes) {
        $.getElementById("sendConfrim").style.opacity = "1" ; 
        $.getElementById("imName").className = "fas fa-exclamation-circle";
        $.getElementById("imPhone").className = "fas fa-exclamation-circle";
        $.getElementById("imMessage").className = "fas fa-exclamation-circle";
        nameErrG.className = "orange";
        phoneErrG.className = "orange";
        messageErrG.className = "orange";
        nameG.style.border = "none";
        phoneG.style.border = "none";
        messageG.style.border = "none";
        nameG.value = "";
        phoneG.value = "";
        messageG.value = "";
    }
    else{
        $.getElementById("sendConfrim").style.opacity = "0" ; 
    }
}


// Name Check
function nameCheck() {
    $.getElementById("sendConfrim").style.opacity = "0" ; 
    if (nameG.value.length < 3) {
        nameErrG.className = "red";
        $.getElementById("imName").className = "fas fa-times-circle";
        nameG.style.border = " 1px red solid";
        nameG.style.outline = " none";
        nameRes = false;
    }
    else {
        nameErrG.className = "green";
        $.getElementById("imName").className = "fas fa-check-circle";
        nameG.style.border = " 1px green solid";
        nameG.style.outline = " none";
        nameRes = true;
    }
}


// Phone Check
function phoneCheck() {
    $.getElementById("sendConfrim").style.opacity = "0" ; 
    if (phoneG.value.length != 11 && phoneG.value.length !=13 || isNaN(phoneG.value) != false) {
        phoneErrG.className = "red";
        $.getElementById("imPhone").className = "fas fa-times-circle";
        phoneG.style.border = " 1px red solid";
        phoneG.style.outline = " none";
        phoneRes = false ; 
    }
    else {
        phoneErrG.className = "green";
        $.getElementById("imPhone").className = "fas fa-check-circle";
        phoneG.style.border = " 1px green solid";
        phoneG.style.outline = " none";
        phoneRes = true;
    }
}

// Message Check
function messageCheck() {
    $.getElementById("sendConfrim").style.opacity = "0" ; 
    if (messageG.value.length < 5) {
        messageErrG.className = "red";
        $.getElementById("imMessage").className = "fas fa-times-circle";
        messageG.style.border = " 1px red solid";
        messageG.style.outline = " none";
        messageRes = false ; 
    }
    else {
        messageErrG.className = "green";
        $.getElementById("imMessage").className = "fas fa-check-circle";
        messageG.style.border = " 1px green solid";
        messageG.style.outline = " none";
        messageRes = true ; 
    }
}