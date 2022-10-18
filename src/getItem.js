// not implemented yet

import https from 'https';
import express from 'express';
// import data from "../items.json" assert { type: "json" };

const app = express();
app.use(express.urlencoded({extended:true}));

function getItem(appId) {
    return new Promise( (resolve) => {
        setTimeout( async () => {

            // get all hashs from a db, for now just a json file
            // const _ = data.main;

            let items = [];
            items.push([2, "570-Bounty%20Hunter%20(Trading%20Card)"]);
            items.push([3, "570-Phantom%20Lancer%20(Trading%20Card)"]);
            items.push([4, "570-Razor%20(Trading%20Card)"]);
            items.push([5, "570-Riki%20(Trading%20Card)"]);
            items.push([6, "570-Tidehunter%20(Trading%20Card)"]);
            items.push([7, "570-Tiny%20(Trading%20Card)"]);
            items.push([8, "570-Tusk%20(Trading%20Card)"]);
            items.push([9, "570-Vengeful%20Spirit%20(Trading%20Card)"]);

            resolve(items);
        }, 2000)
    })
}

export default getItem;