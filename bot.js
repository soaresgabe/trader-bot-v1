import inGem from './src/gem.js';
import inUsd from './src/usd.js';
import getItem from './src/getItem.js';

async function Bot(gameId) {

    let profit = 0;
    const setProfit = (value) => profit = value; // Value and itemID?   

    const items = await getItem(gameId);
    for await (const item of items) {

        let cardInGems = await inGem(gameId, item);
        let cardInUsd = await inUsd(gameId, item);

        (cardInGems > cardInUsd && (cardInGems-cardInUsd) > profit) && setProfit(cardInGems-cardInUsd);
    };

    console.log(`Best Profit: $${profit.toFixed(2)} | Item: ${profit}`);
}

// App 570: Dota
Bot(570);   