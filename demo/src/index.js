import { JackVmPlayer } from "jackvm-player";
import { game } from "./suez";

if ('ontouchstart' in window) {
    document.getElementById('touch-controls').style = "display: flex;";
    [
        {id: 'increase-power', keyCode: 87},
        {id: 'rudder-port', keyCode: 65},
        {id: 'rudder-starboard', keyCode: 68},
        {id: 'decrease-power', keyCode: 83},
        {id: 'try-again', keyCode: 82},
    ].forEach(({id, keyCode}) => {
        const e = document.getElementById(id);
        e.addEventListener('touchstart', () => {
            document.dispatchEvent(new KeyboardEvent('keydown', {keyCode}));
        })
        e.addEventListener('touchend', () => {
            document.dispatchEvent(new KeyboardEvent('keyup'));
        });
    });
}

const parentEl = document.getElementById('screen-container');
let player = new JackVmPlayer(parentEl);
player.load(game);
player.toggleRun();
