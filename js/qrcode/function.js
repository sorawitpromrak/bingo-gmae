function makeid(){
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	
	for( var i=0; i < 7; i++ )
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	var text2 = (new Date()).getTime();
	return text+text2;
}