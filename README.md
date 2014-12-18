GamblingSimulator
=================

###What is this?###

A theory on how to win at gambling.

Proof of concept at betting. Proving it's possible to win at gambling if you have enough money.

###The Theory###

 - Bet $1
 - If you lose, bet 2 x your current bet, ($2)
 - If you win, reset your bet to $1

In order to lose using this system, you need to lose `log2(maxBet)` times in a row.

I have set the win rate to `18/38`, which is a real life value

In this, case, I have `$1,000,000` to bet, I need to lose 19 times in a row, with no wins, in order to lose.

The chance of losing 19 times in a row is (18/38)^19 = 6.82793316e-7

Each time you win, your money will increase by $1.

You can increase the initial bet in order to win more, or, instead of doubling when you lose, you can double and add the initial bet, so, each game you will get the amount you're adding "guarenteed", provided you can cover the losses.

###A more realistic case?###
 - If you had `$1000` to bet, you would need a lose streak of `log2(1000) = 9` loses in a row in order to bust.

###Running it###
 - Install node.js
 - Run `run.bat`
 - Wait
