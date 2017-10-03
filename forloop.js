function loopFunction() {
	var inpvalue=document.getElementById('ipv').value;
	var text=0;
	var numsArray=[1,2,3,4,5,1,2,3,4,5,6,1,2,3,4,5,6,7,1,2,3,4,5,6,7,8]
	for ( i = 0; i < numsArray.length; i++) {
	   if(numsArray[i]==inpvalue){
	   	text++
	   }
	}
	document.getElementById('output').innerHTML=text;
	document.getElementById('stdval').innerHTML=inpvalue;
}