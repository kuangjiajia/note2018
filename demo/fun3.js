函数调用
var fun1 = function() {
  console.log(this)
}
func1()
var fun2 = function() {
  'use strict'
  console.log(this)
}

var obj = {
  func: function() {
    console.log(this)
  }
}
obj.func()


var Person = function(name,sex) {
  this.name = name
  this.sex = sex
  this.getContext = function() {
    return this
  }
}
var llp = new Person("llp","boy")
llp.getContext()


var obj1 = {
  name: "llp"
}
var obj2 = {
  name: "kjj",
  getName: function() {
    console.log(name)
  }.bind(this)
}