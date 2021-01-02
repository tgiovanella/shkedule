import './App.css';
import Navigator from './template/Navigator';
import { Card } from 'primereact/card';
import React, {useState} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import ProjetosForm from './ProjetosForm';
import {Button} from 'primereact/button';
import { Dialog } from 'primereact/dialog';


function Projetos() {
    const [dialogDisplay, setdiaglogDisplay] = useState(false);
    const dados = [
        {
            codigo: 1,
            descricao : 'Thiago Giovanella',
            empresa : 'Thiago Giovanella',
        },
        {
            codigo: 2,
            descricao : 'SHKedule',
            empresa : 'Thiago Giovanella',
        }
    ]

    return (
        <div>            
            <Navigator/>
            <div className="container">
                <Card title="Projetos" subTitle="Projetos em andamento">                    
                    <DataTable value={dados} className="p-datatable-responsive" paginator rows={50}>
                        <Column field="codigo" style={{width: '10%'}} header="Código"/>
                        <Column field="descricao" header="Descrição"/>
                        <Column field="empresa" header="Descrição"/>
                        <Column field="opcoes" style={{width: '5%'}} 
                        header={<Button className="p-button-rounded p-button-info" icon="pi pi-plus"
                        onClick={() => {setdiaglogDisplay(true); console.log(`click`)} }/>}/>
                    </DataTable>
                </Card>
            </div>


        <Dialog header="Formulário de Projetos" style={{width: `80vw`}} visible={dialogDisplay} closable={true} maximizable={true}
        onHide={() => setdiaglogDisplay(false)}
        >
            <ProjetosForm/>
        </Dialog>

        </div>

    );
}

export default Projetos;
