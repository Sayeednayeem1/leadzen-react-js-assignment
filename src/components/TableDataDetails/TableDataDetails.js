import React, { useEffect, useState } from 'react';
import TableDataDetail from './TableDataDetail';

const TableDataDetails = () => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDetails(data)
            });
    }, [])

    return (
        <div>
            <div>
                {
                    details.map(detail => <TableDataDetail

                        key={detail.id}
                        detail={detail}

                    />)
                }
            </div>
        </div>
    );
};

export default TableDataDetails;