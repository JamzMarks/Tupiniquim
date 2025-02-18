import { fetchData } from "./fetchData.js";
import { insertData } from "../components/product/insertProduct.js";

export async function loadProducts(element, path){
    const data = await fetchData(path);
    const products = data.slice(0, 4);
    await insertData(element, products);
}

export async function viewMoreProducts(element, btnId, dataUrl) {
    let path = btnId == "topProducts" ? dataUrl.topProducts : dataUrl.newProducts;
    const data = await fetchData(path);

    const qtdProducts = element.childElementCount;
    const products = data.slice(qtdProducts,( qtdProducts + 4));
    if(products.length !== 0 ){
        await insertData(element, products);
        document.getElementById(btnId).remove();
    }
}