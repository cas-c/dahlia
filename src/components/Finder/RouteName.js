import React from 'react';

const RouteName = ({ route, pokemon }) => (
    <div><a href={`${route.link}`} target='_blank'>{ route.name }</a></div>
);

export default RouteName;
