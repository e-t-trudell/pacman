console.log("PACMAN!")
// var shortWorld = 
var world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2]
];
console.table(world);
// typing your function in the inspect console in the browser will run function
function displayWorld(){
    var output= '';
    for(var i=0; i<world.length; i++){
        // opens row
        output += "<div class='row'>";
        for(var j=0; j<world[i].length; j++){
            // if you see a 2 looking at a brick
            if(world[i][j]==2)
                // "\n\t" = new line new tab
                output += "<div class='brick'></div>";
            // if you see a 1 looking at a coin
            else if(world[i][j]==1)
                output += "<div class='coin'></div>";
            // if you see a 0 looking at an empty
            else if(world[i][j]==0)
                output += "<div class='empty'></div>";
            // learn more about this below
            // output = output+world[i][j];
        }
        // ends row from first for loop
        output += "</div>";
    }
    
    console.log(output);
    document.getElementById('world').innerHTML = output;
}
displayWorld();

// update function to follow along with video using only div id=world
// then call the world id with the getElement above
// 