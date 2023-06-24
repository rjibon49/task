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
                        DeliveryListItem.map(dList => <tr key={dList.id}>
                            <td className='text-center'>{dList.title}</td>
                            <td className='text-center'>{dList.price}</td>
                            <td className='text-center'>{dList.quantity}</td>
                            <td className='text-center'>{dList.delivery_type}</td>
                        </tr>)
                    }
                    </tbody>
                </table>
                <ul className='pagination'>
                    <li className='page-item'>
                        <Link to="#" className='page-link' onClick={prePage}> Prev</Link>
                    </li>
                    {
                        numbers.map((n, i) => (
                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                <Link className='page-link' to="#" onClick={() => changeCPage(n)}>{n}</Link>
                            </li>
                        ))
                    }
                    <li className='page-item'>
                        <Link to="#" className='page-link' onClick={nextPage}> next</Link>
                    </li>
                </ul>
            </div>
        </>
    );
    function prePage(id) {
        if (currentPage !== firstIndex) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changeCPage(id) {
        setCurrentPage(id)
    }
    function nextPage(id) {
        if (currentPage !== lastIndex) {
            setCurrentPage(currentPage + 1)
        }
    }
};

export default AllDelivery;