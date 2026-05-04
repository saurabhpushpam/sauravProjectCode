function maxProfit(prices) {
  let buy = prices[0];     // minimum price so far
  let profit = 0;          // maximum profit so far

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];     // update buy price
    } else {
      profit = Math.max(profit, prices[i] - buy);
    }
  }

  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1]));    // 0











function maxProfitDetails(prices) {
  let minPrice = prices[0];
  let buy = prices[0];
  let sell = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // agar better profit mil raha hai
    if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
      buy = minPrice;
      sell = prices[i];
    }

    // minimum price update
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }

  return {
    buy,
    sell,
    profit: maxProfit
  };
}


console.log(maxProfitDetails([7,6, 6, 5, 4, 3]));
console.log(maxProfitDetails([7,1,5,3,6,4]));