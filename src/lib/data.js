import products from "@/data/products.json"

export const getProductsData =  async() => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    return data;
}

export const getProductsDataById = async(id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`);
    const data = await res.json();
    return data
}