let i = 3;
let str = "";
let counter = 1;

// var right = 246;
// var t = -546;
// var left = -273;
// var bottom = -27;

// var right = 546;
// var t = -273;
// var left = 0;
// var bottom = 273;


var right = 273;
var t = 0;
var left = -273;
var bottom = 546;

while(i<100){

    if(counter==2){
        str = str + i +"%{height:9%;width:9%;border-radius:50%;transform:translate(-27px,"+bottom.toString()+"px)}";
        bottom = bottom - 30;
    }
    else if(counter==3){
        str = str + i +"%{height:9%;width:9%;border-radius:50%;transform:translate("+right.toString()+"px,273px)}";
        right = right - 30;
    }
    else if(counter==4){
        str = str + i +"%{height:9%;width:9%;border-radius:50%;transform:translate(-27px,"+t.toString()+"px)}";
        t = t + 30;
    }
    else if(counter==1){
        str = str + i +"%{height:9%;width:9%;border-radius:50%;transform:translate("+left.toString()+"px,273px)}";
        left = left + 30;
    }

    i=i+3;
    counter = counter + 1;
    if(counter==5){
        counter = 1;
    }
}
