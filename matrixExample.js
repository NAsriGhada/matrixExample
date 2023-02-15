
// multidimensional array = Holds a matrix of elements. 
//An array of arrays



let garage =    [

                             ["Mustang", "F-150", "Explorer"],

                             ["Corvette", "Silverado", "Equinox"],

                             ["Camry", "Highlander", "Tacoma"]

                ];

//console.log(garage[2][2]);



for(let i = 0; i < garage.length; i++){

    for(let j = 0; j < garage[i].length; j++){
        console.log(i, j, garage[i][j]);
    }

} 