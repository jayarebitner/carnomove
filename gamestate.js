class gamestat{
    constructor(){}


    getstate(){

       var gamestateref = database.ref('gamestate');
       gamestateref.on("value",function (data){
           gamestate = data.val();
       })




    }

update(state){
    database.ref('/').update({
        gamestate:state
    });
}
    Start(){
if (gamestate === 0){
payer = new player();
payer.getcount();
frm = new form();
frm.display();

}

    }





}