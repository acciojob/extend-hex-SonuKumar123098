const extendHex = (shortHex) => {
  // write your code here
	let ans="#";
	let i;
	if(shortHex.length==4) i=1;
	else i=0;
	for(i;i<shortHex.length;i++){
		ans+=shortHex[i]
		ans+=shortHex[i];
	}
	return ans;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
