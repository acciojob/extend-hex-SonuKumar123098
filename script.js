const extendHex = (shortHex) => {
  // write your code here
	let ans="#";
	let i=shortHex.length-3;
	let isCapital=false;
	for(i;i<shortHex.length;i++){
		ans+=shortHex[i]
		ans+=shortHex[i];
		let asciiCode=shortHex.charCodeAt(i);
		if(asciiCode>=65 && asciiCode<=90) isCapital=true;
	}
	if(isCapital)return ans.toUpperCase();
	return ans;
};

// Do not change the code below.
// const shortHex = prompt("Enter Short Hex.");
// alert(extendHex(shortHex));
