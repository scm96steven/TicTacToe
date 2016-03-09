var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    turn:0,
   
    createObject: function(x,y,object){
         //Esta funcion crea el sprite del objeto que lo solicite, sea X o 0 en la coordenada x,y que se le proporcione.
        if(object=="O")
            {
                newObject = new cc.Sprite(res.O_png);
            }
        else if(object=="X")
            {
                newObject = new cc.Sprite(res.X_png);
            }
        newObject.setPosition(x,y);
        this.addChild(newObject,1);
},
gameArr:["0","1","2","3","4","5","6","7","8"]
,
  
gameLogic: function(location, event){
    //Aqui va la logica central del juego.
    var touchLocation = location.getLocation(); 
    var y = touchLocation.y; //posicion Y del touch
    var x = touchLocation.x; //posicion X del touch
    var jugada = event.getCurrentTarget();
    var jugadores = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]; //Para cambio de jugadores
    var jugador = jugadores[jugada.turn]; //Se cambia el jugador segun cambia el turno
    var retorna="inicio";

      
   
        //Para marcar el sprite que le toca el turno, en la coordenada correspondiente a la casilla tocada.
        if(x >= 342 && x < 433 && y >= 323 && y < 426 && jugada.gameArr[0]=="0"&& jugada.turn!=9)
            {
                jugada.turn++;
                jugada.createObject(385,376,jugador);
                jugada.gameArr[0]=jugador;
            }
        else if(x >= 433 && x < 526 && y >= 323 && y < 426 && jugada.gameArr[1]=="1" && jugada.turn!=9)
            {
                jugada.turn++;
                jugada.createObject(481,376,jugador);
                jugada.gameArr[1]=jugador;

            }
        else if(x >= 526 && x < 615 && y >= 323 && y < 426 && jugada.gameArr[2]=="2" && jugada.turn!=9)
            {
                jugada.turn++;
                jugada.createObject(580,376,jugador);
                jugada.gameArr[2]=jugador;

            }
        else if(x >= 342 && x < 433 && y >= 221 && y < 323 && jugada.gameArr[3]=="3" && jugada.turn!=9)
            {
                jugada.turn++;
                jugada.createObject(385,266,jugador);
                jugada.gameArr[3]=jugador;

            }
        else if(x >= 433 && x < 526 && y >= 221 && y < 323 && jugada.gameArr[4]=="4" && jugada.turn!=9)
            {
                jugada.turn++;
                jugada.createObject(481,266,jugador);
                jugada.gameArr[4]=jugador;

            }
        else if(x >= 526 && x < 615 && y >= 221 && y < 323 && jugada.gameArr[5]=="5" && jugada.turn!=9)
            {
                jugada.turn++;
                jugada.createObject(580,266,jugador);
                jugada.gameArr[5]=jugador;
  
            }
        else if(x >= 342 && x < 433 && y >= 116 && y < 221 && jugada.gameArr[6]=="6" && jugada.turn!=9)
            {
                jugada.turn++;
                jugada.createObject(385,168,jugador);
                jugada.gameArr[6]=jugador;
               
            }
        else if(x >= 433 && x < 526 && y >= 116 && y < 221 && jugada.gameArr[7]=="7" && jugada.turn!=9)
            {
                jugada.turn++;
                jugada.createObject(481,168,jugador);
                jugada.gameArr[7]=jugador;
              
            }
        else if(x >= 526 && x < 615 && y >= 116 && y < 221 && jugada.gameArr[8]=="8" && jugada.turn!=9)
            {
                jugada.turn++;
                jugada.createObject(580,168,jugador);
                jugada.gameArr[8]=jugador;
               
            }
   
       //Se chequea si algun jugador ha ganado la partida.
       if(jugada.gameArr[0]==jugada.gameArr[1] && jugada.gameArr[1]==jugada.gameArr[2])
           { 
            retorna= jugada.gameArr[0];
          }
        else if(jugada.gameArr[3]==jugada.gameArr[4] && jugada.gameArr[4]==jugada.gameArr[5])
            { 
                retorna= jugada.gameArr[3];
            }
        else if(jugada.gameArr[6]==jugada.gameArr[7] && jugada.gameArr[7]==jugada.gameArr[8])
            { 
                retorna= jugada.gameArr[6];
            }
        else if(jugada.gameArr[0]==jugada.gameArr[3] && jugada.gameArr[3]==jugada.gameArr[6])
            { 
                retorna= jugada.gameArr[0];
            }
        else if(jugada.gameArr[1]==jugada.gameArr[4] && jugada.gameArr[4]==jugada.gameArr[7])
            { 
                retorna= jugada.gameArr[1];
            }
        else if(jugada.gameArr[2]==jugada.gameArr[5] && jugada.gameArr[5]==jugada.gameArr[8])
            { 
                retorna= jugada.gameArr[2];
            }
        else if(jugada.gameArr[0]==jugada.gameArr[4] && jugada.gameArr[4]==jugada.gameArr[8])
            { 
                retorna= jugada.gameArr[0];
            }
        else if(jugada.gameArr[6]==jugada.gameArr[4] && jugada.gameArr[4]==jugada.gameArr[2])
            { 
                retorna= jugada.gameArr[2];
            }
     
     if(retorna!="inicio") //si retorna cambio de valor, significa que gano alguien.
        {
            console.log("Ha ganado el jugador "+retorna);
            alert("Felicidades, Ha ganado el jugador "+retorna);
            jugada.turn = 9;
        }
    
    },

    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("TicTacToe Final", "Rockwell Condensed", 54);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.tablero_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.gameLogic
           
        }, this);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});