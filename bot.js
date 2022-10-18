import inGem from './src/gem.js';
import inUsd from './src/usd.js';
import getItem from './src/getItem.js';

async function Bot(gameId) {

    let profit = 0;
    const setProfit = (value) => profit = value;

    const items = await getItem(gameId);
    for await (const item of items) {

        let cardInGems = await inGem(gameId, item[0]);
        let cardInUsd = await inUsd(753, item[1]);

        console.log(item);

        (cardInGems > cardInUsd && (((cardInGems-cardInUsd )/ 1.05) - 0.01) > profit) 
        && setProfit(((cardInGems-cardInUsd )/ 1.05) - 0.01);
    };

    console.log(`Best Profit: $${profit.toFixed(2)}`);
}

// App 570: Dota
Bot(570);   