
function myfunc(numbers){
    var average = 1;
    var sum = 0;

    for(var i=0;i<numbers.length;i++){
        sum += numbers[i];

    }

    average = sum / numbers.length;
    
    console.log(average);
}

myfunc([23,4,5,65,3,23,4,546,4,23,4]);