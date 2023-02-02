import React, { useEffect, useState } from 'react';
import DetailsModal from '../DetailsModal/DetailsModal';
import Loader from '../ReactLoader/Loader';

const TableDataDetails = () => {

    //todo api data state
    const [details, setDetails] = useState([]);
    // todo modal data state
    const [modalDataDetail, setModalDataDetail] = useState(null);
    // todo loader state
    const [loading, setLoading] = useState(false);

    // todo pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    // todo helper function to get the current items to show on the page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = details.slice(indexOfFirstItem, indexOfLastItem)


    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDetails(data)
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className='container mx-auto'>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>City</th>
                                <th>Street</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentItems.map(detail => <tr key={detail.id}>
                                    <th>{detail.company?.name}</th>
                                    <td>{detail.name}</td>
                                    <td>{detail.email}</td>
                                    <td>{detail.address?.city}</td>
                                    <td>{detail.address?.street}</td>
                                    <td><label htmlFor="table-details-modal" className="btn btn-primary" onClick={() => setModalDataDetail(detail)}>Details</label></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-around mt-4">
                    <button
                        className="btn btn-primary"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        Previous
                    </button>
                    <button
                        className="btn btn-primary"
                        disabled={currentPage === Math.ceil(details.length / itemsPerPage)}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
                <div>
                    {
                        modalDataDetail &&
                        <DetailsModal
                            modalDataDetail={modalDataDetail}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default TableDataDetails;