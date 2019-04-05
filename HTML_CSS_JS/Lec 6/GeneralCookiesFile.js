function createCookie(name, value) {
    var CookieDate = new Date();
//CookieDate.getDate();//Get the day of the Month

    var nextMonth = CookieDate.getMonth();

    CookieDate.setMonth(++nextMonth);

    document.cookie = name + "=" + value + ";expires=" + CookieDate;

}
function displayCookie(name) {
    var returnValue;
    var myCookies = document.cookie;//string"uname=moh;pass=123;..."

    var myCookiesArr = myCookies.split(";");//array["uname=moh","pass=123"]

    var cookiesLength = myCookiesArr.length;//myCookiesArr.length not document.cookie.length 
    var i;
    var elementsInCookies;//=[]
    for (i = 0; i < cookiesLength; i++) {

        elementsInCookies = myCookiesArr[i].split("=");//myCookiesArr[0]=["uname","moh"]

        if (elementsInCookies[0] === name) {
            // document.write("Cookie Num(" + (i + 1) + "):<br/>");
            // document.write(elementsInCookies[0] + ":");//uname
            // document.write(elementsInCookies[1]);//moh
            /*  elementsInCookies.append(myCookiesArr[i].split("="));
             return elementsInCookies;*/
            returnValue = elementsInCookies[1];
        }

    }
    return returnValue;
}
function displayAllCookies() {


    var myCookies = document.cookie;//string"uname=moh;pass=123;..."

    var myCookiesArr = myCookies.split(";");//array["uname=moh","pass=123"]

    var cookiesLength = myCookiesArr.length;
    var i;
    var elementsInCookies;//=[]
    for (i = 0; i < cookiesLength; i++) {

        elementsInCookies = myCookiesArr[i].split("=");//myCookiesArr[0]=["uname","moh"]

        document.write("<br/><br/>Cookie Num(" + (i + 1) + "):<br/>");
        document.write(elementsInCookies[0] + ":");//uname
        document.write(elementsInCookies[1]);//moh
        /*  elementsInCookies.append(myCookiesArr[i].split("="));
         return elementsInCookies;*/
    }
}


function deleteCookie(name) {

    document.cookie = name + "=" + ";expires=07-07-2007";
    document.write("Cookie:" + document.cookie);
}
function deleteAllCookis() {


    //  document.cookie = "";


    var myCookies = document.cookie;//string"uname=moh;pass=123;..."

    var myCookiesArr = myCookies.split(";");//array["uname=moh","pass=123"]

    var cookiesLength = myCookiesArr.length;
    var i;
    var elementsInCookies;//=[]
    for (i = 0; i < cookiesLength; i++) {

        elementsInCookies = myCookiesArr[i].split("=");//myCookiesArr[0]=["uname","moh"]

        document.cookie = elementsInCookies[0] + "=" + ";expires=07-07-2007";

    }


}


