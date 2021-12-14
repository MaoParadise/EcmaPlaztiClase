

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
const pricesEth = [10, 20, 30, 40, 50, 60, 70]  


function maxProfit(prices) {
    let profits = -1;

    for(let i = 0; i < prices.length -1 ; i++) {
        for(let j = i+1; j < prices.length; j++) {
            if(prices[i] < prices[j] && (prices[j] - prices[i]) > profits) {
                profits = prices[j] - prices[i];
            }
        }
    }

    return profits;
}


console.log(maxProfit(pricesBtc)) // -> 16 (compra a 18, vende a 34)


//maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)