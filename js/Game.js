class Game{
    constructor(){
    }
    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value", function(data){
            gameState = data.val;
        })
    }
    updateState(state){
        database.ref('/').update({
            gameState : state
        });
    }
    async start(){
        if(gameState === 0){
            player = new Player()
            var playerCountRef = await database.ref('playerCount').once('value');
         if(playerCountRef.exists){
            playerCount = playerCountRef.val();
            player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(150,300);
        car1.addImage(car1Img);
        car2 = createSprite(350,350);
        car2.addImage(car2Img);
    
        cars = [car1, car2];
    }
    
    play(){
        form.hide();
        Player.getPlayerInfo;
        if(allPlayers !== undefined){
            background = image(raceTrack, 0, -displayHeight*4, displayWidth, displayHeight*5);
            var index = 0;
            var x = 250;
            var y;
            for(plr in allPlayers){
                index = index+1;
                x = x+200;
                y = displayHeight-allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index === player.index){
                    fill("green");
                    ellipse(x, y, 60, 60);
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
            }
        }
    }
    keyPressed(){
        if(keyisDown(LEFT_ARROW)){
           player.x += -10;
           player.update();
        }
        if(keyisDown(RIGHT_ARROW)){
            player.x += 10;
            player.update();
        }
        
    }

}