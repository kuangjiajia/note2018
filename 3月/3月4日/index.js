//订阅者模式

//es5 写法

var Subject = function() {
    var _observers = []
    this.attach = function(observer) {
        _observers.push(observer)
    } 
    this.detach = function() {
        _observers.pop()
    }
    this.notify = function(msg) {
        _observers.forEach(function(item,index){
            item.update(msg)
        })
    }
    this.getAllObserver = function(){
        return _observers
    }
 }

 var Observer = function(name) {
     this.update = function(msg) {
        console.log("this is " + name + 'message' + msg)
     }
 }

 var A = new Observer("A")
 var B = new Observer("B")

 var sub = new Subject()
 console.log(sub.getAllObserver())
 sub.attach(A)
 sub.attach(B)
 console.log(sub.getAllObserver())
 sub.detach()
 console.log(sub.getAllObserver())

 //es6

 class Event {
     constructor() {
        this.subscribes = new Map([['any',[]]])
     }
     on(fn,type='any') {
         let subs = this.subscribes
         if(!subs.get(type)) return subs.set(type,[fn])
         return subs.set(type,(subs.get(type).push(fn)))
     }
     emit(content,type='any') {
         for(let fn of this.subscribes.get(type)) {
             fn(content)
         }
     }
 }