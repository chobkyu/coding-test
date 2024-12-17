function solution(players, callings) {
    const playerMap = new Map();
    players.forEach((player, index) => playerMap.set(player, index));
   
    for(const e of callings) {
        const index = playerMap.get(e);
        
        [players[index-1], players[index]] = [players[index], players[index-1]];
        playerMap.set(players[index], index);
        playerMap.set(players[index - 1], index - 1);
    }

    
    return players
    
}
