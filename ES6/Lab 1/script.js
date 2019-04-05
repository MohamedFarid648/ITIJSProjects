//Array Max Min
function ArrMaxMin(a,b,...arr){//...arr is rest operator
    
    let max=Math.max(...arr);
    let min=Math.min(...arr);
    let arr2=[max,min];
   return arr2;//[max,min];
}
var max,min;
[max,min]=ArrMaxMin(1,1,4,8,10);
document.writeln("4,8,10 <br/>");
document.writeln("Max is"+max+"<br/>");
document.writeln("Min is"+min+"<br/>");

//*****************************************
//Swap
document.writeln("<br/>**********************************************************************************<br/>");

{
    let x=5;let y=10;
    document.writeln("x is"+x+"<br/>");
    document.writeln("y is"+y+"<br/>");
    [x,y]=[y,x];
    document.writeln("After swapping: <br/>");
    document.writeln("x is"+x+"<br/>");
    document.writeln("y is"+y+"<br/>");
 }
///*********************************************

function Course(properties){
    
    let defaultProperties={
        courseName:"JS", courseDuation:15, courseOwner:"Ali"
    }
    let CourseObject=Object.assign({},defaultProperties,properties);
    return CourseObject;
    //return `Course Name ${CourseObject.courseName} courseDuation ${CourseObject.courseDuation} courseOwner ${CourseObject.courseOwner}`;
    
}
Course.prototype.toString=function(){

    return `Course Name ${CourseObject.courseName} courseDuation ${CourseObject.courseDuation} courseOwner ${CourseObject.courseOwner}`;

}

var MyCourseDefault=Course({});
/*MyCourseDefault.prototype.toString=function(){

    return `Course Name ${CourseObject.courseName} courseDuation ${CourseObject.courseDuation} courseOwner ${CourseObject.courseOwner}`;

}*/
var MyCourseJS=Course({ID:10,courseName:"JS", courseDuation:15, courseOwner:"Hussien",coursePreRequest:"Html,Css"});

/*MyCourseJS.prototype.toString=function(){

    return `Course Name ${CourseObject.courseName} courseDuation ${CourseObject.courseDuation} courseOwner ${CourseObject.courseOwner}`;

}*/
let MyCourseCSharp=Course({ID:10,courseName:"C#", courseDuation:15, courseOwner:"Khalid",coursePreRequest:"",courseAfterRequest:"LINQ"});
let MyCourseLINQ=Course({ID:10,coursePreRequest:"",courseAfterRequest:"ASP"});
console.log(MyCourseDefault);
console.log("MyCourseJS:"+MyCourseJS+"<br/>");
console.log("MyCourseCSharp:"+MyCourseCSharp+"<br/>");
console.log("MyCourseLINQ:"+MyCourseLINQ+"<br/>");


//******************************************
//API Array 
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];


/*a. test that every element in the given array is a string

*/
console.log("a.Every fruits elements are string:"+fruits.every(e=> "string"===typeof(e)));


/*b. test that some of array elements starts with "a"

*/
fruits.some(e=> e.toString().startsWith("a")===true);//error
/*c. generate new array filtered from the given array with only elements that starts with "b" or "s"
*/
fruits.filter(e=> e.toString().startsWith("b")===true || e.toString().startsWith("s")===true);
/*
d. generate new array, each element of the new array contains a string declaring that you like the give fruit element
*/
let newArr=fruits.map((e)=>{return "I like "+e;})

/*e. use forEach to display all elements of the new array from previouse point
*/
newArr.forEach(e=>console.log(e))
