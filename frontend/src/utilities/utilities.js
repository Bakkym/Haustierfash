export function calculatePrice(price, currency) {
    switch (currency) {
      case 'EUR':
        return price * 0.86;
      case 'COP':
        return price * 4400;
      default:
        return price;
    }
  }
  
  export function calculateTotal(cart, currency) {
    let totalUSD = 0;
    Object.keys(cart).forEach((itemName) => {
      totalUSD += cart[itemName].price * cart[itemName].quantity;
    });
    return calculatePrice(totalUSD, currency).toFixed(2);
  }
  
  export function getCurrencySymbol(currencyFilter) {
    switch (currencyFilter) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'COP':
        return '$';
      default:
        return '';
    }
  }
  