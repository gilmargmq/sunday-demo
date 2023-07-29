import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { FC } from "react";
import LeftToCenterButton from "./LeftToCenterButton";

interface Props {
    addToRefs: Function
}

const products_list = [
    {
        name: "Champú solido de romero",
        price: "30.00",
        image: "./products/product_1.jpg"
    },
    {
        name: "Champú para perritos",
        price: "27.00",
        image: "./products/product_2.png"
    },
    {
        name: "Champú solido de lavanda",
        price: "30.00",
        image: "./products/product_3.jpg"
    },
    {
        name: "Roll contorno de ojos",
        price: "24.00",
        image: "./products/product_4.jpg"
    }
]
const IndexProductsList: FC<Props> = ({ addToRefs }) => {
    return (
        <div className="bg-white flex flex-col items-center space-y-8 justify-center p-12">
            <span className='text-4xl text-green-600 font-bold text-center'>
                NUEVOS PRODUCTOS
            </span>
            <div className='border border-orange-500 w-32'></div>
            <span>
                Sub título
            </span>
            <div className='flex items-center justify-center flex-wrap gap-6 py-8'>
                {
                    products_list.map((product, index) =>
                    (<Card maxW='sm' key={index}>
                        <CardBody className="flex flex-col space-y-4 items-center text-center">
                            <div className="h-60 w-60 relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt="product_image"
                                />
                            </div>
                            <span className='text-xl font-semibold'>
                                {product.name}
                            </span>
                            <span className='text-lg text-gray-400 font-medium'>
                                S/{product.price}
                            </span>
                        </CardBody>
                        <CardFooter>
                            <div className='text-white bg-green-600 w-full p-2 text-md font-medium text-center cursor-pointer'>
                                Comprar
                            </div>
                        </CardFooter>
                    </Card>))
                }
            </div>
            <LeftToCenterButton buttonRef={addToRefs} bgColor='bg-orange-500' />
        </div>
    );
}

export default IndexProductsList