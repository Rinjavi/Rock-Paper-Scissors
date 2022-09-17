function getComputerChoice() {
    let computerPlay = Math.floor(Math.random()*3 + 1);
    switch(computerPlay) {
        case 1:
            document.write("Rock");
            break;
        case 2:
            document.write("Paper");
            break;
        case 3:
            document.write("Scissors");
            break;
    }
}

getComputerChoice();

//get on the step 4



/*
-> setting the value to be rock, paper & scissors 
-> selecting a number from 1 to 3 randomly and set it to the computer's choice 
-> Make sure to add + 1 cuz Math.random() gives you the number from 0 to 1..
-> allocate the numbers to each plays
-> create a function that provides you with which types wins against which and which ones to tie to each other...
-> let the player decicede which one to play (Make sure it accepts the uppercases, lowercases and mixed)
-> input the value into the function you previous created 
-> Output : if the player wins/ loses/ or a tie... 
*/