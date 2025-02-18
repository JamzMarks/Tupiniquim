export function getFullPrice(price, percentage){
    const perc = 100 - percentage;
    const result = (price * 100) / perc;
    return result;
}