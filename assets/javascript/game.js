    var targetValue;
    var playerValue;
    var crystal1;
    var crystal2;
    var crystal3;
    var crystal4;
    var wins = 0;
    var losses = 0;
    function newGame(){
        targetValue = Math.floor((Math.random() * 120) + 19);
        $("#target-value").text(targetValue);
        playerValue = 0;
        $("#player-value").text(playerValue);
        do {
            crystal1 = Math.floor((Math.random() * 12) + 1);
            crystal2 = Math.floor((Math.random() * 12) + 1);
            crystal3 = Math.floor((Math.random() * 12) + 1);
            crystal4 = Math.floor((Math.random() * 12) + 1);
        } while(crystal4 === crystal1 || crystal4 === crystal2 || crystal4 === crystal3 || crystal3 === crystal1 || crystal3 === crystal2 ||crystal2 === crystal1);
        $("#wins").text(wins);
        $("#losses").text(losses);
    }
    newGame();
    function valueCheck(){
        if(playerValue === targetValue){
            alert("Your final score is " + playerValue + ". YOU WIN!!!!");
            wins++
            newGame()
        }
        else if(playerValue > targetValue){
            alert("Your final score is " + playerValue + ". YOU LOSE!!!");
            losses++
            newGame()
        };
    }
    $("#crystal1").on("click" , function () {
        playerValue = playerValue + crystal1;
        $("#player-value").text(playerValue);
        valueCheck();
    });
    $("#crystal2").on("click" , function () {
        playerValue = playerValue + crystal2;
        $("#player-value").text(playerValue);
        valueCheck();
    });
    $("#crystal3").on("click" , function () {
        playerValue = playerValue + crystal3;
        $("#player-value").text(playerValue);
        valueCheck();
    });
    $("#crystal4").on("click" , function () {
        playerValue = playerValue + crystal4;
        $("#player-value").text(playerValue);
        valueCheck();
    });