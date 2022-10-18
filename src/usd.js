// not implemented yet

import https from 'https';
import express from 'express';

const app = express();
app.use(express.urlencoded({extended:true}));

async function itemPricing(appId, itemHash) {
    return new Promise( (resolve) => {
        setTimeout( () => {

            const url = `https://steamcommunity.com/market/priceoverview/?appid=${appId}&market_hash_name=${itemHash}&currency=1`;

            https.get(url, (res) => {
                res.on("data", (_) => {
                    const data = JSON.parse(_);
                    let lowest_price = parseFloat(data.lowest_price.slice(1).replace(",", "."));
                    
                    resolve(lowest_price);
                })
            })
        }, 2000)
    })
}

function GetCardPriceInUsd(appId, itemHash) {
    return new Promise( (resolve) => {
        setTimeout( async () => {

            let medium_value = await itemPricing(appId, itemHash);

            console.log("Item market value: $" + medium_value.toFixed(2));

            resolve(medium_value);
        }, 2000)
    })
}

export default GetCardPriceInUsd;