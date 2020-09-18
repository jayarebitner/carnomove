class player{
constructor(){}





getcount(){
var playercountref = database.ref('playercount')
playercountref.on("value",function (data){
playercount = data.val();
})
}

update(count){
    database.ref('/').update({
    playercount:count
    }) 


}

updatename(name){
    var playe = "player"+playercount;
    database.ref (playe).set({
        name:name
    })


}


}