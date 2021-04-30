const team = {
    _games: [
      {
        opponent: 'Broncos', 
        teamPoints: 42, 
        opponentPoints: 27
      }
    ],
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11,
      }
    ],
    get games() {
       return this._games;
    },
    get players() {
       return this._players;
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
    addGame(opp, myPts, oppPts) {
      const game = {
        opponent: opp,
        teamPoints: myPts,
        opponentPoints: oppPts
      };
      this.games.push(game);
    }
  };
  team.addPlayer('Steph', 'Curry', 28);
  team.addGame('Titans', 100, 98);
  console.log(team._players);
  console.log(team._games);
  