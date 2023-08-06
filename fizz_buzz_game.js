function fizzBuzzGame(number){
    if(number % 3 == 0) {
        console.log("FIZZ");
    }else if (number % 5 == 0) {
        console.log("BUZZ");
    }else if(number % 5 == 0 && number % 3 == 0){
        console.log("FIZZ BUZZ")
    }
}