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


