import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const ProductComponet = () => {
    const products = useSelector((state) => state.allProducts.products)


    return (
        <>


            <div>
                <section className="text-gray-600 body-font" style={{ width: "90%", margin: "0 auto" }} >
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">

                            {
                                products.map((product) => {
                                    console.log(product, "product")
                                    const { id, title, price, category, image } = product;
                                    return (

                                        <Link to={`/product/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-2 cursor-pointer" key={id}>
                                            <a className="block relative h-48 rounded overflow-hidden">
                                                <img alt="ecommerce" className="object-contain  object-center w-full h-full block" src={image} />
                                            </a>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase"> {category}</h3>
                                                <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                                                <p className="mt-1">${price}</p>
                                            </div>
                                        </Link>
                                    )
                                })
                            }


                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProductComponet
