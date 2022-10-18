// not implemented yet
import https from 'https';
import express from 'express';

const app = express();
app.use(express.urlencoded({extended:true}));

async function itemPricing(appId, itemHash) {
    return new Promise( (resolve) => {
        setTimeout( () => {

            const url = `https://steamcommunity.com/market/priceoverview/?${appId}&1&${itemHash}`;

            https.get(url, (res) => {
                res.on("data", (_) => {
                    // const data = JSON.parse(_);
                    // const median_value = data.median_price;

                    // let price = parseFloat(median_value.slice(1).replace(",", "."));  
                    // console.log(price);

                    resolve([2]);
                })
            })
        }, 2000)
    })
}

function getItem(appId) {
    return new Promise( (resolve) => {
        setTimeout( async () => {

            const hash = ""
            const price = await itemPricing(appId, hash);

            resolve(price);
        }, 2000)
    })
}

export default getItem;