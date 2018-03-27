function fn(n) {
	if(n <= 0) return ;
	console.log("start: " + n)
	fn(n-1)
	console.log("end: "+ n)
}