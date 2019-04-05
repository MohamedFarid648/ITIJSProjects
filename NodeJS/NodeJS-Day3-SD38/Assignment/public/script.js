var JSONobj;
 var TableDiv=document.getElementById("TableDiv"); 

function GetData()
{
			var xhr=new XMLHttpRequest();

			//var node;
			xhr.onreadystatechange=function(){
				//xhr=this
				if(xhr.readyState==4){

					if(xhr.status==200){
						 JSONobj=JSON.parse(xhr.responseText);
							//select.appendChild("")
							var count=0;
							for(e in JSONobj){

								console.log("e:"+e);
								/*select.innerHTML+=`<option value='${e}'>${e}</option>`;*/
								$("#TableDiv").append(
								
								`
								
								<tr id="tr${count}">
							
								<td id="tdName${count}">${JSONobj[e]["Name"]}</td>
								<td id="tdSalary${count}">${JSONobj[e]["Salary"]}</td>
								<td id="tdButton${count}">
								
								<button class="btn btn-success" id="tdButton${count}" onclick="onEditbtnClick(${count},'${JSONobj[e]["Name"]}',${JSONobj[e]["Salary"]})">
									
								Edit
								
								</button>
								   
								</td>
							 
								</tr>
								
							
								`);
								count++;
								
							}
						
					}
					console.log(JSONobj);
				}
		}
				xhr.open("Get","Employees.json");
				xhr.send();
	}
GetData();
function onEditbtnClick(e,n,s){
  var columns=`<form action='/AllEmployees' method='POST'>`
    +`<input type="hidden" name="count" value="${e}" />`
    +`<td><input type="text" name="txtName" value="${n}"/></td>`
	+`<td><input type="text" name="txSalary" value="${s}"/></td>`
	+`<td><input type="submit" class="btn btn-success" value="Update" name="update" id="tdButton${e}"/></td>`
    +`</form>`;
	
console.log(`columns: ${columns}`);
	
$(`#tr${e}`).html(" ");
$(`#tr${e}`).append(columns);
	
/*$(`#tdName${e}`).html(`<input type="text" name="txtName" value="${n}" />`);
$(`#tdSalary${e}`).html(`<input type="text" name="txSalary" value="${s}"/>`);
$(`#tdButton${e}`).html(`
<form action='/AllEmployees' method='POST'>
<input type="hidden" name="count" value="${e}" />
<input type="hidden" name="txtName" value="${n}"/>
<input type="hidden" name="txSalary" value="${s}"/>
<input type="submit" class="btn btn-success" value="Update" name="update" id="tdButton${e}"/>

</form>
`);

*/
console.log($(`#tr${e}`).html());
/*console.log($(`#tdName${e}`).html());
console.log($(`#tdSalary${e}`).html());
console.log($(`#tdButton${e}`).html());
*/
}


function onUpdateButton()
{
			var xhr=new XMLHttpRequest();

			//var node;
			xhr.onreadystatechange=function(){
				//xhr=this
				if(xhr.readyState==4){

					if(xhr.status==200){
						 JSONobj=JSON.parse(xhr.responseText);
							//select.appendChild("")
					}}}				
				xhr.open("Get","Employees.json");
				xhr.send();
	}