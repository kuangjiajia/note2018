var Book = function(id,name,price) {
	//私有方法,私有属性
	var num = 1
	function getName() {}
	//公有属性
	this.id = id
    this.name = name
    this.price = price
    //公有方法
    this.sayName = function() {console.log(this.name)}
    this.setName = function(n) {this.name = n}
    //构造方法
    this.setName("kjj")
}
// 共有属性和共有方法

Book.prototype = {
	getAge: function() {
      return this.name
	},
	getPrice: function() {
      return this.price
	},
	hobby: "sleep"
}