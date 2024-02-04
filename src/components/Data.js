import { useEffect, useState } from "react";
import {
    useGetAllProductsQuery,
    useGetProductQuery,
} from "../features/apiSlice";
export const Data = () => {
    const {
        data: allProductsData,
        error,
        isError,
        isLoading,
    } = useGetAllProductsQuery();
    console.log('allProductsData', allProductsData);
    const [productData] = useState(allProductsData);
    const [searchVal, setSearchVal] = useState('');
    let products = productData && productData.products;

    const handleOnChange = (e) => {
        setSearchVal(e.target.value);
    };
    if (isLoading) return <h1> Loading...</h1>;
    return <div class="container">
        <div class="input-group mb-3">
            <input type="text" class="form-control" onChange={handleOnChange} placeholder="Search the product"
                aria-describedby="button-addon" />
            <button class="btn btn-outline-secondary" type="button" id="button-addon"><i class="bi bi-search"></i></button>
        </div>
        <div class="row">
            <div class="col-xl-8">
                <div class="card border shadow-none">
                    {
                        products && (
                            products.map(item => (
                                <div class="card-body">
                                    <div class="d-flex align-items-start border-bottom pb-3">
                                        <div class="me-4">
                                            <img src={item.images[0]} alt="" class="avatar-lg rounded" />
                                        </div>
                                        <div class="flex-grow-1 align-self-center overflow-hidden">
                                            <div>
                                                <h5 class="text-truncate font-size-18"><a href="#" class="text-dark">Waterproof Mobile Phone </a></h5>
                                                <p class="text-muted mb-0">
                                                    <i class="bx bxs-star text-warning"></i>
                                                    <i class="bx bxs-star text-warning"></i>
                                                    <i class="bx bxs-star text-warning"></i>
                                                    <i class="bx bxs-star text-warning"></i>
                                                    <i class="bx bxs-star-half text-warning"></i>
                                                </p>
                                                <p class="mb-0 mt-1">Color : <span class="fw-medium">Gray</span></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>

                <div class="row my-4">
                    <div class="col-sm-6">
                        <a href="ecommerce-products.html" class="btn btn-link text-muted">
                            <i class="mdi mdi-arrow-left me-1"></i> Continue Shopping </a>
                    </div>
                    <div class="col-sm-6">
                        <div class="text-sm-end mt-2 mt-sm-0">
                            <a href="ecommerce-checkout.html" class="btn btn-success">
                                <i class="mdi mdi-cart-outline me-1"></i> Checkout </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4">
                <div class="mt-5 mt-lg-0">
                    <div class="card border shadow-none">
                        <div class="card-header bg-transparent border-bottom py-3 px-4">
                            <h5 class="font-size-16 mb-0">Order Summary <span class="float-end">#MN0124</span></h5>
                        </div>
                        <div class="card-body p-4 pt-2">

                            <div class="table-responsive">
                                <table class="table mb-0">
                                    <tbody>
                                        <tr>
                                            <td>Sub Total :</td>
                                            <td class="text-end">$ 780</td>
                                        </tr>
                                        <tr>
                                            <td>Discount : </td>
                                            <td class="text-end">- $ 78</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping Charge :</td>
                                            <td class="text-end">$ 25</td>
                                        </tr>
                                        <tr>
                                            <td>Estimated Tax : </td>
                                            <td class="text-end">$ 18.20</td>
                                        </tr>
                                        <tr class="bg-light">
                                            <th>Total :</th>
                                            <td class="text-end">
                                                <span class="fw-bold">
                                                    $ 745.2
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>;
};
