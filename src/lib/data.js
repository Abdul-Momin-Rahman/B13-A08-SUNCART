import products from "@/data/products.json"

export const getProductsData =  async() => {
    
    return products.products;
}