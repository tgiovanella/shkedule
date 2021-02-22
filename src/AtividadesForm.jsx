import './App.css';
import { Card } from 'primereact/card';
import { Form } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { Editor } from 'primereact/editor';
import React from 'react';

const handleSubmit = () => {

}

function AtividadesForm(props) {

    return (
        <div>            
            <div className="container">
                <Card title="Atividades" subTitle="Registro de atividades em projetos">
                    <Divider/>
                    <Form
                        onSubmit={handleSubmit}
                        render={({ handleSubmit, form, submitting, pristine, values }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="p-grid">
                                    <div className="p-col-4 p-float-label">
                                        <Dropdown optionLabel="descricao" className="form-field" name="idempresa" options={{}} />
                                        <label htmlFor="idempresa">Empresa atendida</label> 
                                    </div>
                                    <div className="p-col-6 p-float-label">
                                        <Dropdown optionLabel="descricao" className="form-field" name="idprojeto" options={{}} />
                                        <label htmlFor="idempresa">Projeto atendido</label> 
                                    </div>
                                    <div className="p-col-2 p-float-label">
                                        <InputMask type="datetime" mask="99/99/9999 99:99" name="datahora_inicio" className="form-field"/>
                                        <label htmlFor="idempresa">Data e hora do início</label> 
                                    </div>
                                </div>
                                <div className="p-grid">
                                    <div className="p-col-12 p-float-label">
                                        <Editor style={{height:'120px'}} name="descricao" className="form-field" headerTemplate={() => {}}/>
                                        
                                    </div>
                                </div>
                                <div className="p-grid">
                                    <div className="p-col-12">
                                        <Button label="Enviar" icon="pi pi-send" />
                                    </div>
                                </div>
                            </form>
                        )}
                    />

                </Card>
            </div>
        </div>

    );
}

export default AtividadesForm;
