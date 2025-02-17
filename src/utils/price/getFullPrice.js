export function getDiscountPrice(price, percentage){
    const discount = (percentage / 100) * price;
    const result = price - discount;
    return result;
}