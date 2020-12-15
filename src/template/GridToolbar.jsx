import {Toolbar} from 'primereact/toolbar';
import React, {Fragment} from 'react';
import {Button} from 'primereact/button';

export const GridToolbar = props => {
    const options = (
        <Fragment>
            <Button icon="pi pi-plus" className="p-mr-2"/>
        </Fragment>
    )
    return(
        <Toolbar right={options}/>
    )
}