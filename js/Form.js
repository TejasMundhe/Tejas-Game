class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Ready");
        this.title = createElement('h2');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
    }
    display(){
        this.title.html("Infinite Racing Game");
        this.title.position(250,50);
        this.button.position(250,280);
        this.input.position(250,300);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value;
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            
        })
    }
}