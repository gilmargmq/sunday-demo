import { FC } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const recipes_list = [
    {
        name: "Batido de fresas",
        description: "Batido de fresas con leche vegetal",
        image: "./recipes/recipe_1.png"
    },
    {
        name: "Batido de platano",
        description: "Batido de fresas con leche vegetal",
        image: "./recipes/recipe_2.png"
    }
]

const RecipesList: FC = () => {
    return (
        <div className="bg-white flex flex-col items-center space-y-20 justify-center p-6">
            <Tabs variant='soft-rounded' colorScheme='green' align="center">
                <TabList>
                    <Tab>Recetas</Tab>
                    <Tab>Cuidado Personal</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20 py-8'>
                            {
                                recipes_list.map((recipe, index) => (
                                    <div key={index} className="flex flex-col space-y-3 items-center text-center">
                                        <div className="h-60 w-60 relative">
                                            <img
                                                src={recipe.image}
                                                alt='recipe_img'
                                            />
                                        </div>
                                        <span className='text-xl font-medium'>
                                            {recipe.name}
                                        </span>
                                        <span className='text-lg text-gray-400'>
                                            {recipe.description}
                                        </span>
                                        <button className='bg-green-600 text-white rounded-full py-1.5 px-6 cursor-pointer'>
                                            <a
                                                href="/files/sample.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            > Ver receta</a>
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                </TabPanels>
            </Tabs>

        </div >
    );
}

export default RecipesList