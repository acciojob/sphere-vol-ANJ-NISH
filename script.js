function volume_sphere() {

	let rele=document.getElementById('radius');
	let vele=document.getElementById('volume');

	let rvalue=rele.value;

	

	if(typeof(parseFloat(rvalue))==='number' && !isNaN(parseFloat(rvalue)) && parseFloat(rvalue)>=0)
	{
		let rva=parseFloat(rvalue);
	let volume=(4/3)*3.14*(rva**3);
		let vol=volume.toFixed(4);
		vele.value=parseFloat(vol);
	}
	else
	{
	vele.value=NaN;	
	}
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = function(e) {
    e.preventDefault();
    volume_sphere();
};
