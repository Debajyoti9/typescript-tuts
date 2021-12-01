// var number = 1;
// let count = 2;
// function doSomething(){
//     for(let i=0;i<5;i++){
//         console.log(i);
//     }
//     console.log('Finally: '+i);//i is the scope of nearest block not nearest function when we use let.
// }
// doSomething();
//number
var a;
//boolean
var b;
//strings
var c;
//any
var d;
//numbers[] = [1,2,3];
var e = [1, 2, 3];
//any[] = [1,true,"hello"]
var f = [1, true, 'a', false];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
; //explicitly setting the value is 
var backgroundColor = Color.Red;
