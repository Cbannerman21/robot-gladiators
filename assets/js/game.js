var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can log multiple values at once like this:
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that the are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like the FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if pl;ayer chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemys health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;

        console.log(
            playerName + " attacked " +  enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            if (enemyHealth <= 0) {
                window.alert(enemyName = " had died!");
            }
            else {
                window.alert(enemyName = " still has " + enemyHealth + " health left.");
            }
            //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to updaye the value in the 'playerHealth' variable.
                playerHealth = playerHealth - enemyAttack;
        
            //Log a resulting message to the console so we know that it worked.
                console.log(
                    enemyName + " attacked " + playerName + ". " +playerName + " now has " + playerHealth + " health remaining."
                );
        
            // Check players health
            if (playerHealth <= 0) {
                window.alert(playerName + " had died!");
            }    
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
            // if player chooses to skip 
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
          var confirmSkip = window.confirm = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
          if (confirmSkip) {
              window.alert(playerName + " has decided to skip this fight. Goodbye!");
              // subtract money from playerMoney for skipping
              playerMoney = playerMoney - 2;
          }
          // if no (false), ask question again by running fight() again
          else {
              fight();
          }
        } else {
            window.alert("You need to choose a valid option. Try again!");
        }
    };


    
    


fight();