import ProductClietnComponent from "@/components/Product/ProductClietnComponent";
import { getProductsDataById } from "@/lib/data";




export async function generateMetadata({ params }) {

    const { id } = await params
    

    const product = await getProductsDataById(id)
    

    return {
        title: `${product.name}`,
        description: product.description,
    };
}


const ProductDetailsPage = async ({params}) => {

    const {id} = await params;
    
    const product = await getProductsDataById(id)

    return (
        <ProductClietnComponent product={product}></ProductClietnComponent>
    );
};

export default ProductDetailsPage;