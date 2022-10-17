
import { products } from "./getFetch";

export const getDetail = (props) => {
    return new Promise ((res, rej )=> {
        setTimeout(() => {
            res(findProductById(props.id))
        }, 1000);
    });
}

function findProductById(id)  {
    let result;
    products.forEach(product => {
        if (product.id === id) {
            result=product;
            
        }
        
    });
    return result;
}