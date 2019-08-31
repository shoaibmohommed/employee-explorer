import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function ({ items }) {
    return <ListGroup>
        {items.map((item, id) => <ListGroup.Item key={id}>{item}</ListGroup.Item>)}
    </ListGroup>
}