import https from 'https';
import express from 'express';

const app = express();
app.use(express.urlencoded({extended:true}));

function GetGemPrice() {
    return new Promise( (resolve) => {
        setTimeout( () => {
            const url = "https://steamcommunity.com/market/priceoverview/?appid=753&currency=1&market_hash_name=753-Sack%20of%20Gems"

            https.get(url, (res) => {
                res.on("data", (_) => {
                    const data = JSON.parse(_);
                    const median_value = data.median_price;

                    let gemPrice = parseFloat(median_value.slice(1).replace(",", "."));  
                    
                    gemPrice /= (1000 * 0.1);

                    resolve(gemPrice);
                })
            })
        }, 2000);
    } )
}

async function GetCardPriceInGems(appid, itemid) {
    return new Promise( (resolve) => {
        setTimeout( async () => {
            const url = `https://steamcommunity.com/auction/ajaxgetgoovalueforitemtype/?appid=${appid}&item_type=${itemid}`;
            
            const gemPrice = await GetGemPrice();

            https.get(url, (res) => {
                res.on("data", (_) => {
                    const data = JSON.parse(_);
                    const goo_value = data.goo_value;
                    const cardPrice = parseFloat(goo_value.replace(",", "."));

                    console.log("Item gem value: $" + cardPrice * gemPrice);

                    resolve(cardPrice * gemPrice);
                })
            })
        }, 2000)
    })
}

export default GetCardPriceInGems;