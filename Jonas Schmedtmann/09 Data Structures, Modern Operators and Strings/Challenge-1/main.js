'use strict'

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
        ],
        [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },

    printGoals: function(...players) {
        console.log(...players);
        console.log(...this.scored);
        console.log(this.score);
    }
};


const player1 = game.players[0];
const player2 = game.players[1];
const [gk0, ...filedPlayers0] = player1
const [gk1, ...filedPlayers1] = player2
const allPlayers = [...player1, ...player2];
const finalPlayers = ['Thiago', 'Coutinho', 'Perisic', ...allPlayers];
const {team1, x: draw, team2} = game.odds;

game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
team1 < team2 && console.log('team one wins');
team1 > team2 && console.log('team Two wins');


