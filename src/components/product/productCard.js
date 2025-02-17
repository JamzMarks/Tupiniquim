// export function productCard(item){
//     const {title, price, image, rating, percentage} = item;
//     return(
//         <article class="productCard">
//             <div class="img-container">
//                 <img src={image} alt={title}/>
//             </div>
//             <div class="details">
//                 <h3 class="title">{title}</h3>
//             </div>
//             <div class="rating">
//                 <div class="starRate"></div>
//                 <p>{rating}/5</p>
//             </div>
//             <div class="priceContainer">
//                 <p class="price">{price}</p>
//                 {
//                     item.discount ? `<p class="discount">${item.discount}</p>`
//                 }
//             </div>
//         </article>
//     )
// }