const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];
// need to get array of chunks like:
// [['item1','item2'], ['item3','item4'], ['item5','item6'], ['item7','item8'], ['item9']];

function chunk(items, itemsInChunk = 2) {
    const result = [];
    let chunk = [];

    for (let i = 0; i < items.length; i++) {
        chunk.push(items[i]);
        if (chunk.length === itemsInChunk) {
            result.push(chunk);
            chunk = [];
        }
    }
    if (chunk.length !== 0) {
        result.push(chunk);
    }

    return result;
}

console.log(chunk(items, 3));
