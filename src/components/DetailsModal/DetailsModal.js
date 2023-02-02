import React from 'react';

const DetailsModal = ({ modalDataDetail }) => {

    const { name, address, company, email, phone, username, website } = modalDataDetail;

    return (
        <div>
            <input type="checkbox" id="table-details-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>City</th>
                                    <th>Street</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>{company?.name}</th>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{address?.city}</td>
                                    <td>{address?.street}</td>
                                    <td><label className="btn btn-xs bg-orange-600 border-none" >Details</label></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>

                    </div>
                    <div className="modal-action">
                        <label htmlFor="table-details-modal" className="btn btn-xs bg-orange-600 border-none">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;