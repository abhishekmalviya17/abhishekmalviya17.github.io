var players = [
    {name: "Roger Federer", rank: 1},
    {name: "Rafel Nadal", rank: 2},
    {name: "Nalbandian", rank: 12},
    {name: "Andy Murray", rank: 14},
    {name: "Andy Roddick", rank: 4},
    {name: "Pete Sampras", rank: 3},
    {name: "Rod Laver", rank: 190},
    {name: "Andre Agassi", rank: 11},
    {name: "Novak Djokovic", rank: 5},
    {name: "Arthur Ashe", rank: 8},
];


var output = [];

function getFields(players, field) {
  
    for (var i=0; i < players.length ; ++i){
        output.push(players[i][field]);
    
    }
}


function getRankWithPlayers(){

getFields(players,"rank");

for(k=0;k<output.length;k++){
    if(output[k]<=10){
        console.log(players[k]);
    }
    
}
}

getRankWithPlayers(players,"rank");