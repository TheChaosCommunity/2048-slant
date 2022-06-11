// this handles the settings page
import game from "js/game_manager.js";
import grid from "js/grid.js";
// make a button in the main page to open the settings page
function addSettingsButton() {
    var button = document.createElement("button");
    button.innerHTML = "Settings";
    button.onclick = function() {
        openSettings();
    }

function openSettings() {
    // note: the settings "page" is CLI!
    // as such, tell the user to open the console with Ctrl+Shift+C
    alert("Open the console with Ctrl+Shift+C");
    // now, the true fun can begin!
    openSettingsCLI();

function openSettingsCLI() {
    // this is the CLI for the settings page
    console.log("Welcome to the settings page!");
    console.log("Here you can change the settings of the game.");
    
    // ask the user for the settings they want to change
    console.log("What settings would you like to change?");
    console.log("1. Number of Games Simultanously (soon)");
    console.log("2. Grid Size");
    console.log("3. Number of Moves per Game (soon)");
    console.log("4. Exit");
    // get the user's input
    var input = prompt("Enter the number of the setting you want to change:");
    // check the input
    if (input == 1) {
        // throw not implemented error
        throw new Error("Not implemented");
    } else if (input == 2) {
        // change the grid size
        changeGridSize();
    } else if (input == 3) {
        // change the number of moves per game
        changeNumMoves();
    } else if (input == 4) {
        // exit the settings page
        console.log("Exiting settings page...");
        throw new Error("Settings page closed manually.");
    } else {
        // the input was invalid
        console.log("Invalid input.");
        console.log("");
        // throw error
        throw new Error("Input was invalid.");
    }
}

function changeGridSize() {
    // this function changes the grid size
    // ask the user for the new grid size
    var input = prompt("Enter the new grid size:");
    // check the input
    if (input == "") {
        // the input was invalid
        console.log("Invalid input.");
        console.log("");
        // throw error
        throw new Error("Input was invalid.");
    } else {
        // the input was valid
        // change the grid size
        game.grid.size = parseInt(input);
        // tell the user the grid size was changed
        console.log("Grid size changed to " + input + ".");
        console.log("To see the changes, press F5.");
    }
}

