import React from 'react';
import NavberMenu from '../Shared/NavberMenu';
import UseDelivery from '../../Hook/UseDelivery';

const ExpressDelivery = () => {

    const [deliveryLists] = UseDelivery();


    return (
        <div>
            <NavberMenu />
            <div className='container'>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" className='text-center'>Title</th>
                            <th scope="col" className='text-center'>Price</th>
                            <th scope="col" className='text-center'>Quantity</th>
                            <th scope="col" className='text-center'>Delivery Type</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        deliveryLists.filter((dList) => dList.delivery_type === "express").map(dList => <tr key={dList.id}>
                            <td className='text-center'>{dList.title}</td>
                            <td className='text-center'>{dList.price}</td>
                            <td className='text-center'>{dList.quantity}</td>
                            <td className='text-center'>{dList.delivery_type}</td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExpressDelivery;