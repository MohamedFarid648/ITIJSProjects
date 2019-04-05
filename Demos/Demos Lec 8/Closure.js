/*(function(x){
 
 console.log(x);
 
 })(9)
 */
console.log("closureTest_problem: closure problem in loop")

function closureTest_Problem() {

    var arr = [];
    var i = 0;

    for (i = 0; i < 5; i++) {

        arr.push(function (){console.log("i="+i); });

    }


    return arr;

}

console.log("closureTest:Solving closure problem in loop using IIFE pattern")
function closureTest() {

    var arr = [];
    var i = 0;

    for (i = 0; i < 5; i++) {

        arr.push((function (j) {
            return function () {
                console.log("i="+i);
                console.log("j="+j);
            }
        }

        )(i))

    }


    return arr;

}


var arrResult2 = closureTest_Problem();
console.log(arrResult2[0]());
console.log(arrResult2[1]());
console.log(arrResult2[2]());
console.log(arrResult2[3]());

var arrResult = closureTest();
console.log(arrResult[0]());
console.log(arrResult[1]());
console.log(arrResult[2]());
console.log(arrResult[3]());



console.log("a(10):closure seen string:");

var z = 1;
function a(x) {

    var b = "closure seen string"
    x = 50;


    return function (k) {
        //console.log(b);
        var y = 2;
        return k * y * z;

    }


}

var result = a(10);
console.log(result);//function
console.log(result(5));//20//a(10)()

//a();
//b();

