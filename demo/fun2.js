var Book = function() {
    var name = 'kjj'
    var getName = function() {
        return name
    }
    return getName
}

//第一秒为1，第二秒为2....
for(var i = 0 ; i < 10 ; i++ ) {
	(function(i) {
		setTimeout(function() {
			console.log(i+1)	
		},1000 * i)	
	})(i)
}

for(let i = 0 ; i < 10 ; i++ ) {
	setTimeout(function() {
		console.log(i+1)
	},i * 1000)
}

for(var i = 0 ; i < 10 ; i++ ) {
	setTimeout(function(i) {
		console.log(i+1)
	},1000 * i, i)
}

var fn = function(i) {
	setTimeout(function() {
		console.log(i+1)	
	},1000 * i)	
}

for(var i = 0 ; i < 5; i++) {
	fn(i)
}