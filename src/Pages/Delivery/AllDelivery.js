import React, { useState } from 'react';
import NavberMenu from '../Shared/NavberMenu';
import UseDelivery from '../../Hook/UseDelivery';
import { Link } from 'react-router-dom';

const AllDelivery = () => {

    const [deliveryLists] = UseDelivery();

    const [currentPage, setCurrentPage] = useState(1);
    const DeliveryItemPerPage = 5;

    const lastIndex = currentPage * DeliveryItemPerPage;
    const firstIndex = lastIndex - DeliveryItemPerPage;
    const DeliveryListItem = deliveryLists.slice(firstIndex, lastIndex);

    const nPage = Math.ceil(deliveryLists.length / DeliveryItemPerPage)
    const numbers = [...Array(nPage + 1).keys()].slice(1)

    function changeCPage(id) {
        setCurrentPage(id)
    }

    return (
        <>
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
                        deliveryLists.map(dList => <tr key={dList.id}>
                            <td className='text-center'>{dList.title}</td>
                            <td className='text-center'>{dList.price}</td>
                            <td className='text-center'>{dList.quantity}</td>
                            <td className='text-center'>{dList.delivery_type}</td>
                        </tr>)
                    }
                    </tbody>
                </table>
                <ul className='pagination'>
                    {
                        numbers.map((n, i) => (
                            <li className='' key={i}>
                                <Link to="#" onClick={changeCPage}>{n}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
};

export default AllDelivery;