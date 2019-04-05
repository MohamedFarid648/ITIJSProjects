




//JS Parser will hoisting firstNum=undefined,secondNum=undefined,tryFunction(,) before any thing
//document.write("<br/><br/>h(before excuting the function)is :" + h);//Error:Not defined


tryFunction(firstNum, secondNum);//JS parser know it's statement so he will go to it to excute it

document.write("<br/><br/>h (after excuting the function)is :" + h);


//Just for old browsers

// <!--//To make Html parser in old browser ignore the next code 

document.write("<br/><br/>Hello from Head");
// -->//To make JS parser in old browser ignore the -- operator


var x;//x is undefined now
document.write("<br/><br/>var x;==>the value of x is:" + x + " <br/>and type of x :" + typeof x);
x = 5;
document.write("<br/><br/>x=5;==>the value of x is:" + x + " <br/>and type of x :" + typeof x);

x = "I'm a String please";

document.write("<br/><br/>x=I'm a String please;==>the value of x is:" + x + " <br/>and type of x :" + typeof x);


x = true;

document.write("<br/><br/>  x=true;==>the value of x is:" + x + " <br/>and type of x :" + typeof x);


x = null;//x is empty now not undefined


document.write("<br/><br/>the value of x is:" + x + " <br/>and type of x :" + typeof x);

y = "10";
x = 10;
if (x == y)
    document.write("<br/><br/> X==Y is true,,x=" + x + " type of x: " + typeof x + ",,y=" + y + " type of y: " + typeof y);
else
    document.write("<br/><br/> X==Y is false,,x=" + x + " type of x: " + typeof x + ",,y=" + y + " type of y: " + typeof y);

if (x === y)
    document.write("<br/><br/> X===Y is true,,x=" + x + " type of x: " + typeof x + ",,y=" + y + " type of y: " + typeof y);
else
    document.write("<br/><br/> X===Y is false,,x=" + x + " type of x: " + typeof x + ",,y=" + y + " type of y: " + typeof y);

document.write("<br/><br/> y=10;x=10;==>  x==y is " + (x == y));//compare just value
document.write("<br/><br/>y=10;x=10;==>  x===y is " + (x === y));//compare value and data type


document.write("<br/><br/>X&&Y =>true so it returns the value that make it true:" + (x && y));
document.write("<br/><br/>Y&&X =>true so it returns the value that make it true:" + (y && x));
document.write("<br/><br/>X&&0 =>false so it returns the value that make it false" + (x && 0));
document.write("<br/><br/>0&&X =>false so it returns the value that make it false" + (0 && x));







var confirmUser = confirm("Do you want to end the application ?");//window.confirm();

document.write("<br/><br/>confirmUser is :" + confirmUser);


if (confirmUser) {
    document.write("<br/><br><big> Thanks alot ^_^</big>");
    document.write("<br/><br><big><big> Thanks alot ^_^\
                  \
                 </big></big>");//if didn't put {} it will not excute this script in headear tag
}
else
    window.focus();
// window.close();
//document.write("<br/><br>Closing");
// document.write("<br/><br>Another statement"); //will be printed any time         

//   window.close();





document.write("<br/>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh\t horizontal tab 1\t bbbbbbbbbbbbbbbbbbbb");
document.write("<br/>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh\v vertical tab 1\v bbbbbbbbbbbbbbbbbbbb \'Ahmed \" \'' \\ back\bspace \r g");
document.write("<br/><br/>parseInt(110,2):" + parseInt(110, 2));
document.write("<br/><br/>Number(12345):" + Number(12345));
document.write("<br/><br/>Number(false):" + Number(false));
document.write("<br/><br/>Number(124ad):" + Number("124ad"));
document.write("<br/><br/>Number(asd124ad):" + Number("asd124ad"));
document.write("<br/><br/>Number(Null):" + Number(null));
document.write("<br/><br/>Number(\"undefined\"):" + Number("undefined"));


document.write("<br/><br/>isFinite(12345):" + isFinite(12345));
document.write("<br/><br/>isFinite(false):" + isFinite(false));//error
document.write("<br/><br/>isFinite(124ad):" + isFinite("124ad"));
document.write("<br/><br/>isFinite(asd124ad):" + isFinite("asd124ad"));
document.write("<br/><br/>isFinite(Null):" + isFinite(null));//error
document.write("<br/><br/>isFinite(\"undefined\"):" + isFinite("undefined"));

document.write("<br/><br/>isNaN(12345):" + isNaN(12345));
document.write("<br/><br/>isNaN(false):" + isNaN(false));//error
document.write("<br/><br/>isNaN(124ad):" + isNaN("124ad"));
document.write("<br/><br/>isNaN(asd124ad):" + isNaN("asd124ad"));
document.write("<br/><br/>isNaN(Null):" + isNaN(null));//error
document.write("<br/><br/>isNaN(\"undefined\"):" + isNaN("undefined"));

document.write("<br/><br/>escape(\"this is a try white space \"):" + escape("this is a try white space "));
document.write("<br/><br/>encodeURIComponent(\"this is a try white space \"):" + encodeURIComponent("this is a try white space "));
document.write("<br/><br/>encodeURI(\"https: //ar .islamway.net \"):" + encodeURI("https: //ar .islamway.net "));
document.write("<br/><br/>decodeURI(\"https: //ar .islamway.net \"):" + decodeURI("https: //ar .islamway. net "));





function tryFunction(num1, num2) {

    // var x2 = num1 || 10;//x2 is local varaible
    //num1 if 0 it will not sum it 10+0=10(it will be:10+10=20)

    //Sol:
    var x2 = (num1 == undefined) ? 10 : num1;//x2 is local varaible
    //num1 if 0 it will not sum it 10+0=10(it will be:10+10=20)

    var y2 = (num2 == undefined) ? 10 : num2;//y2 is local varaible

    h = 20;//global varaible(will see it after first function excute(don't do it please ^_^)


    var result = x2 + y2;

    document.write("<br/><br/>Result is :" + result);
    document.write("<br/><br/>h(from the function) is :" + h);

    //this reference it will go to the parent from the function to get values of firstNum,secondNum and if it didn't find them will go to the parent of the parent and if no one has them it will excute error (unavailable) 
    document.write("<br/><br/>firstNum(from the function) is :" + firstNum);
    document.write("<br/><br/>secondNum(from the function) is :" + secondNum);


    //function will return undefined by default
}
var firstNum = 0;//= 5;//5 
var secondNum;//undefined

var returnValue = tryFunction(firstNum, secondNum);//JS parser know it's statement so he will go to it to excute it


document.write("<br/><br/>returnValue is :" + returnValue);



var stringObject = new String("Hello World Every One");
var myStringObject = "  Hello World Every One  ";


document.write("<br/><br/>myStringObject.fontcolor(\"green\"):" + myStringObject.fontcolor("green"));
document.write("<br/><br/>myStringObject.small():" + myStringObject.small());
document.write("<br/><br/>myStringObject.strike():" + myStringObject.strike());

document.write("<br/><br/>myStringObject.split(\" \"):" + myStringObject.split(" "));
var myArray = myStringObject.split(" ");
for (j = 0; j < myArray.length; j++) {

    document.write("<br/><br/>myArray[" + (j + 1) + "]:" + myArray[j]);

}
document.write("<br/><br/>myStringObject.split(\" \",2):" + myStringObject.split(" ", 2));
document.write("<br/><br/>myStringObject.trim():" + myStringObject.trim());
document.write("<br/><br/>myStringObject.concat(\"Concat Now\"):" + myStringObject.concat("Concat Now"));

var pattern = /e/;
var flag = "gmi";
var regExpression = new RegExp(pattern, flag);//Explicity  Regular Expression
var myRegExpression = /E/gi;//literal Regular Expression
//g:global,,i:ignore e or E,,m:multiple lines
document.write("<br/><br/> myStringObject.replace(myRegExpression, \"???\"):" + myStringObject.replace(regExpression, "?"));


//Error
//"Clickme".anchor("Text");//<a name="Text"
//"Clickme".link("www.google.com");//<a href="">Clickme</a>  


