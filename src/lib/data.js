export const getProductsData =  async() => {
    const res = await fetch("http://localhost:5000/products" , {
        cache : 'default'
    })

    return res.json();
}