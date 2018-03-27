function demo(a) {
    console.log(a)
    function a() {}
}

function demo(a) {
    function a() {}
    console.log(a)
}

function demo(a) {
    var a = 20
    console.log(a)
}

function demo(a) {
    console.log(a)
    var a = 20
    console.log(a)
}


(function() {
    console.log(typeof foo); // 函数指针
    console.log(typeof bar); // undefined

    var foo = 'hello',
        bar = function() {
            return 'world';
        };

    function foo() {
        return 'hello';
    }
}());