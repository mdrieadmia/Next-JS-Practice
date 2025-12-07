import React from 'react';

const CatchAllRoutePage = async({params}:{params:Promise <{slug: string[]}>}) => {

    const {slug} = await params;
    console.log(slug);

    return (
        <div>
            <h1>Catch All Route </h1>
        </div>
    );
};

export default CatchAllRoutePage;