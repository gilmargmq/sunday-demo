import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { FC } from "react";

const food_list = [
    {
        name: "Leche de quinua",
        price: "13.00",
        image: "./products/product_5.jpg"
    },
    {
        name: "Carne de soya en daditos",
        price: "28.00",
        image: "./products/product_6.jpg"
    },
    {
        name: "Carne de soya molida",
        price: "28.00",
        image: "./products/product_7.jpg"
    },
]

const personal_care_list = [
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
    },
    {
        name: "Acondicionador solido",
        price: "30.00",
        image: "./products/product_8.jpg"
    },
    {
        name: "Hidratante de manos",
        price: "18.00",
        image: "./products/product_9.jpg"
    },
    {
        name: "Loción hidratante corporal",
        price: "36.00",
        image: "./products/product_10.png"
    },
    {
        name: "Bálsamo labial",
        price: "18.00",
        image: "./products/product_11.png"
    },
    {
        name: "Polvo dental",
        price: "14.00",
        image: "./products/product_12.jpg"
    }
]

const ProductsList: FC = () => {
    return (
        <div className="bg-white flex flex-col items-center space-y-20 justify-center p-6">
            <Tabs variant='soft-rounded' colorScheme='green' align="center">
                <TabList>
                    <Tab>Alimentos</Tab>
                    <Tab>Cuidado Personal</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-8'>
                            {
                                food_list.map((product, index) =>
                                (<Card w='xs' key={index}>
                                    <CardBody className="flex flex-col space-y-1 items-center text-center">
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
                    </TabPanel>
                    <TabPanel>
                        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-8'>
                            {
                                personal_care_list.map((product, index) =>
                                (<Card w='xs' key={index}>
                                    <CardBody className="flex flex-col space-y-1 items-center text-center">
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
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
}

export default ProductsList