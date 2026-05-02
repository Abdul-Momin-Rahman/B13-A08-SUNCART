

export const getProductsData =  async() => {
    const res = await fetch("https://suncart-server-t99d.onrender.com/products" , {
        cache : "force-cache"
    });

    if (!res.ok) {
        throw new Error (`Failed to fetch data: ${res.status}`);
    }

    const data = await res.json();
    return data;
}

export const getProductsDataById = async(id) => {
    const res = await fetch(`https://suncart-server-t99d.onrender.com/products/${id}`);

    if (!res.ok) {
        throw new Error (`Failed to fetch data: ${res.status}`);
    }

    const data = await res.json();
    return data
}