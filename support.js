var $ = document;

var nameG = $.getElementById("nameResive");
var phoneG = $.getElementById("telResive");
var valueG = $.getElementById("valueResive");

var nameErrG = $.getElementById("nameErr");
var phoneErrG = $.getElementById("phoneErr");
var valueErrG = $.getElementById("valueErr");

var nameRes, phoneRes, valueRes;

var finalValue;
var changeValue = $.getElementById("changeValueLive");
var lastPart;
var counter;

var i = 0;
var j = -3;

// Btn Check
function btnCheck() {

    if (nameG.value.length < 3) {
        nameErrG.className = "red";
        $.getElementById("Fname").className = "fas fa-times-circle";
        nameG.style.border = " 1px red solid";
        nameG.style.outline = " none";
        nameRes = false;
    }
    else {
        nameErrG.className = "green";
        $.getElementById("Fname").className = "fas fa-check-circle";
        nameG.style.border = " 1px green solid";
        nameG.style.outline = " none";
        nameRes = true;
    }


    if (phoneG.value.length != 11 && phoneG.value.length != 13 || isNaN(phoneG.value) != false) {
        phoneErrG.className = "red";
        $.getElementById("Fphone").className = "fas fa-times-circle";
        phoneG.style.border = " 1px red solid";
        phoneG.style.outline = " none";
        phoneRes = false;
    }
    else {
        phoneErrG.className = "green";
        $.getElementById("Fphone").className = "fas fa-check-circle";
        phoneG.style.border = " 1px green solid";
        phoneG.style.outline = " none";
        phoneRes = true;
    }



    if (valueG.value.length < 4 || isNaN(valueG.value) != false ||valueG.value == 0) {
        valueErrG.className = "red";
        $.getElementById("Fvalue").className = "fas fa-times-circle";
        valueG.style.border = " 1px red solid";
        valueG.style.outline = " none";
        valueRes = false;
        changeValue.innerHTML = "   فیلد مبلغ اجباری است . "
    }
    else {
        valueErrG.className = "green";
        $.getElementById("Fvalue").className = "fas fa-check-circle";
        valueG.style.border = " 1px green solid";
        valueG.style.outline = " none";
        valueRes = true;
    }


    if (nameRes && phoneRes && valueRes) {
        $.getElementById("moveConfrim").style.opacity = "1";
        $.getElementById("Fname").className = "fas fa-exclamation-circle";
        $.getElementById("Fphone").className = "fas fa-exclamation-circle";
        $.getElementById("Fvalue").className = "fas fa-exclamation-circle";
        nameErrG.className = "orange";
        phoneErrG.className = "orange";
        valueErrG.className = "orange";
        nameG.style.border = "none";
        phoneG.style.border = "none";
        valueG.style.border = "none";
        nameG.value = "";
        phoneG.value = "";
        valueG.value = "";
    }
    else {
        $.getElementById("moveConfrim").style.opacity = "0";
    }
}


// Name Check
function nameCheck() {
    $.getElementById("moveConfrim").style.opacity = "0";
    if (nameG.value.length < 3) {
        nameErrG.className = "red";
        $.getElementById("Fname").className = "fas fa-times-circle";
        nameG.style.border = " 1px red solid";
        nameG.style.outline = " none";
        nameRes = false;
    }
    else {
        nameErrG.className = "green";
        $.getElementById("Fname").className = "fas fa-check-circle";
        nameG.style.border = " 1px green solid";
        nameG.style.outline = " none";
        nameRes = true;
    }
}


// Phone Check
function phoneCheck() {
    $.getElementById("moveConfrim").style.opacity = "0";
    if (phoneG.value.length != 11 && phoneG.value.length != 13 || isNaN(phoneG.value) != false) {
        phoneErrG.className = "red";
        $.getElementById("Fphone").className = "fas fa-times-circle";
        phoneG.style.border = " 1px red solid";
        phoneG.style.outline = " none";
        phoneRes = false;
    }
    else {
        phoneErrG.className = "green";
        $.getElementById("Fphone").className = "fas fa-check-circle";
        phoneG.style.border = " 1px green solid";
        phoneG.style.outline = " none";
        phoneRes = true;
    }
}
function onkeyDownValue(){
    if (isNaN(valueG.value) != false ||valueG.value == 0) {
        valueG.value = "";
        valueErrG.className = "red";
        $.getElementById("Fvalue").className = "fas fa-times-circle";
        valueG.style.border = " 1px red solid";
        valueG.style.outline = " none";
        changeValue.innerHTML = "   فیلد مبلغ اجباری است . "
    }
}
// Message Check
function valueCheck() {
    $.getElementById("moveConfrim").style.opacity = "0";
    if (isNaN(valueG.value) != false ||valueG.value == 0) {
        valueG.value = "";
        valueErrG.className = "red";
        $.getElementById("Fvalue").className = "fas fa-times-circle";
        valueG.style.border = " 1px red solid";
        valueG.style.outline = " none";
        changeValue.innerHTML = "   فیلد مبلغ اجباری است . "
    }
    else if (valueG.value.length < 4) {
        valueErrG.className = "red";
        $.getElementById("Fvalue").className = "fas fa-times-circle";
        valueG.style.border = " 1px red solid";
        valueG.style.outline = " none";
        changeValue.innerHTML = "   فیلد مبلغ اجباری است . "
        valueRes = false;
    }
    else {
        valueErrG.className = "green";
        $.getElementById("Fvalue").className = "fas fa-check-circle";
        valueG.style.border = " 1px green solid";
        valueG.style.outline = "none";
        valueRes = true;

        finalValue = valueG.value / 10;
        counter = Math.floor((String(finalValue).length - 1) / 3);

        // console.log(finalValue);
        // console.log(counter);

        console.log(valueG.value.slice(j , valueG.value.length));


        // for (var dd = 0 ; dd <= valueG.value.length ; dd++){
        //     lastPart = valueG.value.slice(-3 , valueG.value.length) ; 
        // }
        // changeValue.innerHTML = lastPart + String(lastPart) ; 
    }
}