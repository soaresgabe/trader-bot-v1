// not implemented yet

function GetCardPriceInUsd(gameId, itemId) {
    return new Promise( (resolve) => {
        setTimeout( () => {

            let medium_value = 0.05;

            if(gameId === 570 || gameid === 80924 || gameid === 624820) // Dota, TF2 and CSGO.
                medium_value = (medium_value / 1.15) - 0.01;
            else
                medium_value = (medium_value / 1.05) - 0.01;

            console.log("Item market value: $" + medium_value);

            resolve(medium_value);
        }, 2000)
    })
}

export default GetCardPriceInUsd;