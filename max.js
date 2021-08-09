function totalSales( tshirtPrice, pantPrice, shoesPrice){
    const perShirt = 100;
    const perPent = 200;
    const perShoes = 500;
    // calculation 
   const shirtSellPrice = tshirtPrice * perShirt;
   const pentSellPrice =  pantPrice * perPent;
   const shoesSellPrice = shoesPrice * perShoes;
   const totalSell = shirtSellPrice + pentSellPrice + shoesSellPrice;
   return totalSell;

}
 const firstOption = totalSales(1, 3, 4);
 console.log(firstOption);