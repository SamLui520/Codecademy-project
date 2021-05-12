const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let Game = true;

class Field {
    constructor(field) {
        this._field = field;
        this.y = 0;
        this.x = 0;
    }

    get field() {
        return this._field;
    }

    print() {
        return this.field.map(row =>
            row.join('')
        ).join('\n');
    }

    ask() {
        console.log('Which direction do you want to move to?')
        console.log('(8 for Up, 2 for down, 4 for left and 6 for right)');
        console.log('(7 for leftUp, 9 for rightUp, 1 for leftDown and 3 for rightDown)');
        let move = prompt();
        switch (move.toLowerCase()) {
            case '8':
                console.log('Moving up');
                this.y -= 1;
                break;
            case '2':
                console.log('Moving down');
                this.y += 1;
                break;
            case '4':
                console.log('Moving left');
                this.x -= 1;
                break;
            case '6':
                console.log('Moving right');
                this.x += 1;
                break;
            case '7':
                console.log('Moving leftUp');
                this.x -= 1;
                this.y -= 1;
                break;
            case '9':
                console.log('Moving rightUp');
                this.x += 1;
                this.y -= 1;
                break;
            case '1':
                console.log('Moving leftDown');
                this.x -= 1;
                this.y += 1;
                break;
            case '3':
                console.log('Moving rightDown');
                this.x += 1;
                this.y += 1;
                break;
            default:
                console.log('input again');
                break;
        }
    }

    checkWin() {
        if (this.field[this.y] == undefined) {
            console.log('You lose - Out of boundary');
            console.log('Game Over!');
            return Game = false;
        }

        switch (this.field[this.y][this.x]) {
            case hole:
                console.log('You lose - You fell in a hole!');
                console.log('Game Over!');
                Game = false;
                break;
            case undefined:
                console.log('You lose - Out of boundary');
                console.log('Game Over!');
                Game = false;
                break;
            case hat:
                console.log('You win - You found the hat!');
                Game = false;
                break;
            case fieldCharacter:
                console.log('Keep looking for the hat...');
                this.field[this.y][this.x] = pathCharacter;
                break;
            case pathCharacter:
                console.log('You are stepping on *');
                break;
        }
    }

    static generateField(height, width, percentage) {

        const fieldOrHole = (percentage) => {
            if (percentage >= 0 && percentage <= (height * width)) {
                const ranNum = Math.random() * (height * width);
                if (ranNum < percentage) {
                    return hole;
                } else {
                    return fieldCharacter;
                }
            }
        }

        const plainField = () => {
            function makeWidthArray() {
                let widthArray = [];
                for (let i = 0; i < width; i++) {
                    widthArray.push(fieldOrHole(percentage));
                }
                return widthArray;
            }
            let plainField = [];
            for (let i = 0; i < height; i++) {
                plainField.push(makeWidthArray());
            }
            return plainField;
        }

        const settingField = plainField();

        do {
            settingField[Math.floor(Math.random() * height)][Math.floor(Math.random() * width)] = hat;
        } while (settingField[0][0] == hat);

        settingField[0][0] = pathCharacter;

        return settingField;
    }

}


function game() {
    let height = prompt('how height for the gameField? ');
    let width = prompt('how width for the gameField? ');
    let percentage = prompt('how many percentage for the gameField? ');
    const gameField = new Field(Field.generateField(height, width, percentage));
    while (Game) {
        console.log(gameField.print());
        gameField.ask();
        gameField.checkWin();
    }
    console.log('The game is end');
}

game();