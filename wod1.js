function chessBoard(){
	var firstPattern = "# # # # #";
	var secondPattern = "# # # #";

	var msg ="";
	for (var i = 1; i <8; i++) {
		if (i%2==0) {
			msg += secondPattern + "\n";
		}
		else{
			msg += firstPattern + "\n";
		}
	}
	return msg;
}


console.log(chessBoard());