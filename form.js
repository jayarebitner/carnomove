class form{
    constructor(){




        
    }











display(){
var title=createElement('h2');
title.html("CAR RACING GAME");
title.position(200,20);
var input = createInput("name");
var button = createButton('start');
var greating = createElement('h3');
button.position(450,450);
input.position(250,250);
button.mousePreased(function(){
    input.hide();
    button.hide();
    var name = input.value();
    playercount = playercount + 1
    player.update(name);
    player.updatecount(playercount);
    greating.html("welcom" + name);
    greating.position(240,20);


})


}


}