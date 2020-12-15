import './App.css';
import Navigator from './template/Navigator';
import { Card } from 'primereact/card';
import React, {Fragment} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {GridToolbar} from './template/GridToolbar';
import {Button} from 'primereact/button';
function Empresas() {

    const dados = [
        {
            codigo: 1,
            descricao : 'Thiago Giovanella'
        },
        {
            codigo: 2,
            descricao : 'Sharkdev'
        }
    ]

    return (
        <div>            
            <Navigator/>
            <div className="container">
                <Card title="Empresas" subTitle="Empresas atendidas">                    
                    <DataTable value={dados} className="p-datatable-responsive" paginator rows={50}>
                        <Column field="codigo" style={{width: '10%'}} header="Código"/>
                        <Column field="descricao" header="Descrição"/>
                        <Column field="opcoes" style={{width: '5%'}} header={<Button className="p-button-rounded p-button-info" icon="pi pi-plus"/>}/>
                    </DataTable>
                </Card>
            </div>
        </div>

    );
}

export default Empresas;
