import { Fragment } from 'react';
import { useState } from 'react';

function ListGroup() {
    let items = [
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'Paris'
    ];

    // Hook
    const [selectedIndexActive, setSelectedIndexActive] = useState(-1);
    const isEmptyMessage = items.length === 0 ? <p>No items found</p> : null;

    return (
        <Fragment>
            <h1>List</h1>
            {isEmptyMessage}
            <ul className="list-group">
                {
                    items.map((item, index) =>
                        <li className={selectedIndexActive === index ? 'list-group-item active' : 'list-group-item'}
                            key={item} onClick={() => { setSelectedIndexActive(index); }}>{item}</li>) // Convert the array into a list of <li> elements
                }
            </ul>
        </Fragment>
    );
}

export default ListGroup;