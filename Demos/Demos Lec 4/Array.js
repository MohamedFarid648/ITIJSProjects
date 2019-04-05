/*
var arr=[];
arr[0]="abc";
arr[1]=5;
arr[3]=6;
arr[9]=100;

console.log(arr.length);//10

console.log(arr[2]);//undefined

for(i=0;i<arr.length;i++)
	console.log(arr[i]);
*/
var associativeArray=[];
associativeArray["key1"]="a";
associativeArray["key two"]=10;
associativeArray["Employee"]="ahmed";
associativeArray["2"]=123;

associativeArray["key two"]="Gaber";
var i;

for(i in associativeArray)
	console.log(i+":"+associativeArray[i]);