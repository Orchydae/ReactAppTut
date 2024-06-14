import { Fragment } from 'react';
import { useState } from 'react';

interface Props {
    items: string[];
    heading: string;

    onSelectItem: (item: string) => void // This is a function that takes a string as an argument and returns void
}

function ListGroup({items, heading, onSelectItem}: Props) {

    // Hook
    const [selectedIndexActive, setSelectedIndexActive] = useState(-1);
    const isEmptyMessage = items.length === 0 ? <p>No items found</p> : null;

    return (
        <Fragment>
            <h1>{heading}</h1>
            {isEmptyMessage}
            <ul className="list-group">
                {
                    items.map((item, index) =>
                        <li className={selectedIndexActive === index ? 'list-group-item active' : 'list-group-item'}
                            key={item} onClick={() => {
                                setSelectedIndexActive(index);
                                onSelectItem(item);
                            }}>{item}</li>) // Convert the array into a list of <li> elements
                }
            </ul>
        </Fragment>
    );
}

export default ListGroup;