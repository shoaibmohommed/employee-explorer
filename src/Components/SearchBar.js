import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { getSubsList } from '../Utils';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

export default function ({ onSearchClick }) {
    const [historyItems, onHistoryItemsChange] = useState([]);
    const [value, onChange] = useState("");

    const onInputChange = selected => {
        onChange(selected);
    };

    const onChange1 = selected => {
        onChange(selected[0]);
    }
    const onSearch = async () => {
        const list = await getSubsList(value);
        onSearchClick(list);
        let items = historyItems;
        items.push(value);
        items = [...new Set(items)];
        onHistoryItemsChange(items);
    };

    return <>
        <Typeahead
            id="historyInput"
            onChange={onChange1}
            onInputChange={onInputChange}
            options={historyItems}
        />
        <Button onClick={onSearch} className="ml-4" variant="dark">Search</Button>
    </>
};
