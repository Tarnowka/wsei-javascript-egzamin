function bigestSumOfTwoElements(array) {
    var newarray=array;

    if(newarray.length==1){
        return newarray[0];
    }
    else if(newarray.length==0){
        return false;
    }
    else{
        var suma=0;
        newarray.sort();
        for(var i=newarray.length-1;i>newarray.length-3;i--){
            suma=suma+newarray[i];
        }
        return suma;
    }
}