function guessNum(){
    let number = 6;
    let enter = prompt("Guess a number between 1 and 10: ");
    while (enter != number) {
        if (enter < number) {
            alert("Too Low");
        } else {
            alert("Too High");
        }
        enter = prompt("Guess a number between 1 and 10");
    }
    alert("Correct! you got number 6.")
}