
const getSingleProduct = async (id) => {

    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`, {
            cache: "no-store"
        })
        if (!res.ok) {
            throw new Error("data load failed")
        }
        return res.json()
    } catch (error) {
        console.log(error);
    }

};

export default getSingleProduct;