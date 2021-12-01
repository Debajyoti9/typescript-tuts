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
// let a:number;
// //boolean
// let b:boolean;
//strings
// let c:string;
// //any
// let d:any;
// //numbers[] = [1,2,3];
// let e: number[] = [1,2,3];
// //any[] = [1,true,"hello"]
// let f:any[] = [1,true,'a',false];

// enum Color{Red=0, Green=1, Blue=3};//explicitly setting the value is 
// let backgroundColor = Color.Red;

// let message = 'abc';
// let endsWithC = message.endsWith('c');

//type assertions

// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
// //type assertion does not change the type of the variable in runtime it's not going to restructure the object in memory


//inline annotations

// let drawPoint=(point:{x:number,y:number}) =>{
//     //..
// }

// drawPoint({
//     x:1,
//     y:2
// })

//its works fine in simple cases but it is little verbose also chances somewhere else we have another function what expect point object we don't want repeat this object literal  in multiple places
//so for those cases we need interface

// interface Point { // pascal naming convention
//     x:number,
//     y:number
// }

// let drawPoint = (point:Point) =>{
//     //..
// }

// drawPoint({
//     x:1,
//     y:2
// })

//cohesion : Things that are related should be part of one unit.they should go together

//interface only for declaration they does not have any implementations


// class Point{
//     x:number;
//     y:number;
//      constructor(x:number,y:number){
//        this.x = x;
//        this.y = y;  
//      }
//     draw(){
//       //...
//     }
//     getDistance(another:Point){
//         //....
//     }
// }

// let point:Point = new Point(2,3);//with values
// point.draw();

class Point{
    x:number;
    y:number;
     constructor(x?:number,y?:number){//this lines makes the parameters optional
       this.x = x;
       this.y = y;  
     }
    draw(){
      //...
    }
    getDistance(another:Point){
        //....
    }
}

let point:Point = new Point();//without values
point.draw();

//Access Modifiers - public , protected , private

//  set X(value){
//      if(value<0)
//           throw new Error('value cannot be less than 0');
//      this.x = value;     
//  } 

//properties

//its looks like a field from the outside but internally really a method in the class

