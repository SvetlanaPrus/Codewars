// 6 kata - Lottery Ticket

// Refactoring -

function checkWin([word, code]) {
    return word.split('').some(letter => letter.charCodeAt(0) === code);
}

function bingo(ticket, win) {
    const miniWin = ticket.filter(arr => checkWin(arr)).length;
    return miniWin >= win ? 'Winner!' : 'Loser!';
}


// function bingo(ticket, win){       // not passed tests
//     console.log(ticket, win);
//     let miniWin = 0;
//
//     function checkWin(array){
//         for(const letter of array[0]){
//             console.log(letter)
//             if(letter.charCodeAt(0) === array[1]) return true;
//         }
//         return false;
//     }
//
//     for(const arr of ticket){
//         if(checkWin(arr)) {
//             miniWin += 1;
//         }
//     }
//
//     console.log(miniWin)
//     return miniWin >= win? 'Winner!' : 'Loser!';
// }

