class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getCount(){
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount : count
        });
    }
    update(){
        database.ref('players/player'+ this.index);
        database.ref('playerIndex').set({
            name : this.name,
        });
    }
    static getPlayerInfo(){
        playerInfoRef = database.ref('players')
        playerInfoRef.on("value", data =>{
            allPlayers = data.val();    
        })
    }
}