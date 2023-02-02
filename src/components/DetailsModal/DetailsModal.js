import React from 'react';

const DetailsModal = ({ modalDataDetail }) => {

    const { name, address, company, email, phone, username, website } = modalDataDetail;


    return (
        <div>
            <input type="checkbox" id="table-details-modal" className="modal-toggle " />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="table-container bg-gradient-to-r from-[#9bafd9] to-[#103783] shadow-lg rounded-md">
                        <table className="custom-table ">
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>City</th>
                                    <th>Street</th>
                                    <th>Close</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>{company?.name}</th>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{address?.city}</td>
                                    <td>{address?.street}</td>
                                    <td><div className="modal-action">
                                        <label htmlFor="table-details-modal" className="btn btn-xs bg-red-600 border-none">Close</label>
                                    </div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='mt-8 py-10 bg-gradient-to-r from-[#9bafd9] to-[#103783] rounded-md shadow-lg  font-bold'>
                        <div className='ml-8'>
                            <h2 className=' font-bold mb-1'>Description</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br/> et dolore magna aliqua. Eleifend donec pretium vulputate sapien nec sagittis aliquam. </p>
                        </div>
                        <div>
                            <div className="card  shadow-xl">
                                <div className="card-body">
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                                        <div>
                                            <div className='mr-28'>
                                                <h1 className=' font-bold'>Person Name</h1>
                                                <p>{name}</p>
                                            </div>
                                            <div>
                                                <h1 className=' font-bold'>Address</h1>
                                                <p>{address?.city}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='mr-28'>
                                                <h1 className=' font-bold'>Company</h1>
                                                <p>{company?.name}</p>
                                            </div>
                                            <div>
                                                <h1 className=' font-bold'>Website</h1>
                                                <p>{website}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='mr-28'>
                                                <h1 className=' font-bold'>Email</h1>
                                                <p>{email}</p>
                                            </div>
                                            <div>
                                                <h1 className=' font-bold'>Phone</h1>
                                                <p>{phone}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='mr-28'>
                                                <h1 className=' font-bold'>User Name</h1>
                                                <p>{username}</p>
                                            </div>
                                            <div>
                                                <h1 className=' font-bold'>Street</h1>
                                                <p>{address?.street}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;