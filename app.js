// The chance of winning
var winChance = 18/38;

// The payback for winning
var payBack = 2.0;

// Returns true if you win
function gamble() {
    return Math.random() < winChance;
}

// Amount you start with
var money = 1000000;

// The max amount of money you had at any given time
var maxMoney = money;

// The highest bet so far
var highestBet = 0;

// The initial bet
var initialBet = 1;

// The current bet
var currentBet = initialBet;

// The amount of losses
var losses = 0;

// The amount of wins
var wins = 0;

// The longest lose streak
var loseStreak = 0;

// The longest win streak
var winStreak = 0;

// The current streak
var currentStreak = 0;

function doGambling() {
    var bet = currentBet;

    // Stop us from betting more than we have
    if(bet > money) {
        bet = money;
    }

    // Check if we made a new highest bet
    if(bet > highestBet) {
        highestBet = bet;
    }

    // Remove the bet amount
    money -= bet;

    // Log the current bet
    console.log('Betting ' + bet);

    // Ensure they aren't backrupted
    if(money < 0 || bet == 0) {
        console.log('BUST! ' + money + ' highest amount: ' + maxMoney);
        return;
    }

    // Run the gamble
    if(gamble()) {
        // We won!

        // Give the money
        money += payBack * bet;

        if(money > maxMoney) {
            maxMoney = money;
        }

        // Reset bet back down
        currentBet = initialBet;

        // Tell them how much they win
        console.log('Winner (+' + (payBack * bet) + ')');

        // Increase total wins
        wins++;

        // Check streaks
        if(currentStreak < 0) {
            if(-currentStreak > loseStreak) {
                loseStreak = -currentStreak;
            }
            currentStreak = 0;
        }
        currentStreak++;
    } else {
        // Failure

        // Increase the bet in order to cover losses
        currentBet *= 2 + initialBet;

        // Loser
        console.log('LOSER!');

        // Increase total losses
        losses++;

        // Check streaks
        if(currentStreak > 0) {
            if(currentStreak > winStreak) {
                winStreak = currentStreak;
            }
            currentStreak = 0;
        }
        currentStreak--;
    }

    // Log the current money
    console.log('Money: ' + money + ', Max:' + maxMoney + ', Mbet:' + highestBet + ', S:' + currentStreak + ', W:' + wins + ', L:' + losses + ', LS:' + loseStreak + ', WS:' + winStreak);

    // Gamble again
    setTimeout(doGambling, 0.01);
}

// Start gambling
doGambling();
