export function Controller() {
    let myPlayer = null;
    let myModel = null;
    let myContainer = null;


    this.init = function(model, container){
        myModel = model;
        // myPlayer = player;
        myContainer = container;

        container.addEventListener('click', (e) => {
            if(e.target.getAttribute("href") === '#game'){
                setTimeout(() => {
                    myModel.getCanvas();
                    myModel.gameStartOnePlayer();
                }, 100);
                setTimeout(() => {
                    this.gameStartOnePlayer();
                }, 1000);
            }
        });

    //     window.onbeforeunload = function() {
    //         // hashPageName = 'main';
    //         // myModuleModel.updateState(hashPageName);
    //         location.hash = '#main';
    //         return false;
    //   };
    }

    this.gameStartOnePlayer = () => {
        addEventListener('keydown', function (e){
            switch (e.code) {
                case 'ArrowUp':
                    myModel.isMoving = true;
                    myModel.key = 'ArrowUp';

                    myModel.playerMovement();
                    // myModel.isMoving = true;
                    // myModel.key = 'ArrowUp';
                    break;
                case 'ArrowDown':
                    myModel.isMoving = true;
                    myModel.key = 'ArrowDown';
                    // myModel.playerMovement();
                    // myModel.isMoving = true;
                    // myModel.key = 'ArrowDown';
                    break;
                case 'ArrowLeft':
                    myModel.isMoving = true;
                    myModel.key = 'ArrowLeft';
                    // myModel.playerMovement();
                    // myModel.isMoving = true;
                    // myModel.key = 'ArrowLeft';
                    break;
                case 'ArrowRight':
                    myModel.isMoving = true;
                    myModel.key = 'ArrowRight'; 
                    // myModel.playerMovement();
                    // myModel.isMoving = true;
                    // myModel.key = 'ArrowRight'; 
                    break;
                case 'Space':
                    myModel.isShoots = true;
                    myModel.playerShoots();
                    // myModel.isShoots = true;
                    // myModel.playerOneShiftKeydown();
                    break;
                default:
                    break;
            }
        });

        addEventListener('keyup', function (e){
            switch (e.code) {
                case 'ArrowUp':
                    myModel.isMoving = false;
                    // myModel.playerMovement();
                    // myModel.isMoving = false;
                    break;
                case 'ArrowDown':
                    myModel.isMoving = false;
                    // myModel.playerMovement();
                    // myModel.isMoving = false;
                    break;
                case 'ArrowLeft':
                    myModel.isMoving = false;
                    // myModel.playerMovement();
                    // myModel.isMoving = false;
                    break;
                case 'ArrowRight':
                    myModel.isMoving = false;
                    // myModel.playerMovement();
                    // myModel.isMoving = false;
                    break;
                case 'Space':
                    myModel.isShoots = false;
                    myModel.playerShoots();
                    // myModel.isShoots = false;
                    // myModel.playerOneShiftKeydown();
                    break;
                default:
                    break;
            } 
        });
        
    }
}

