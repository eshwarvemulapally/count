(function() {
    var a = b = 5;
    a = 1;
    function test() {
        var a;
        function foo() {
           return 2;
        }
     
        console.log(a);
        console.log(foo());
        
        a = 1;
     }
     
     test();
 })();
 
 console.log('hello'.repeatify(3));