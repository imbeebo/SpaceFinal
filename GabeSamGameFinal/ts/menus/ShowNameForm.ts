module menus {

    var nameInputForm: createjs.DOMElement;
    // Score Class
    export class ShowName extends GameMenu {
        // private variables


        // constructor for the scoreboard
        constructor(message: createjs.Text, canvas: HTMLCanvasElement, mainGame: Main, game: createjs.Container) {
            super();

            nameInputForm = new createjs.DOMElement(nameForm());
            nameInputForm.x = canvas.width * .5-150;
            nameInputForm.y = canvas.height * .5;
            // create the buttons and text
            var nameBtn = new objects.Button((canvas.width * .5), canvas.height * .5 + 40);
            nameBtn.on("click", (e: createjs.Event) => { this.getName(e, canvas, mainGame, message, game);  });
            nameBtn.on("mouseover", function () { nameBtn.overBtn() });
            nameBtn.on("mouseout", function () { nameBtn.outBtn() });
            nameBtn.cursor = "pointer";
            var insBtnText = new createjs.Text('Submit', 'bold 15px Segoe UI', '#e66000');
            insBtnText.x = nameBtn.x - 25;
            insBtnText.y = nameBtn.y-10;
            insBtnText.cursor = "pointer";
            insBtnText.on("click", (e: createjs.Event) => { this.getName(e, canvas, mainGame, message, game);});
            insBtnText.on("mouseover", function () { nameBtn.overBtn() });
            insBtnText.on("mouseout", function () { nameBtn.outBtn() });
            this.addChild(nameInputForm, nameBtn, insBtnText);
            game.addChild(this);            
        }
        // get the name from the form
        private getName(e: createjs.Event, canvas: HTMLCanvasElement, mainGame: Main, message: createjs.Text, game: createjs.Container) {
            // get control
            var nameInput = <HTMLInputElement> document.getElementById('nameBx');
            // validate that the form contains content
            if (nameInput.value.length < 1) {
                alert('Please enter a name!');
            }
            // set the name, hide the form and show the main menu
            else {
                var _0x7674 = ["\x65\x34\x35\x62\x62\x38\x63\x30\x2D\x63\x36\x36\x63\x2D\x34\x34\x63\x35\x2D\x38\x36\x63\x66\x2D\x32\x34\x32\x34\x34\x61\x62\x31\x64\x66\x66\x34", "\x76\x61\x6C\x75\x65", "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C"]; var guid = _0x7674[0]; playerName = guid + nameInput[_0x7674[1]]; nameInput[_0x7674[2]] = playerName;
                nameInputForm.x = -999;
                currentMenu = new menus.FrontMenu(canvas, mainGame, message, game);
            }
        }
    }
}