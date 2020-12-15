import './App.css';
import { Card } from 'primereact/card';
import { Form } from 'react-final-form';
import { Input } from './Components/Input';
import { Button } from 'primereact/button';
import React from 'react';

const handleSubmit = () => {

}

function EmpresasForm(props) {

    return (
        <div>            
            <div className="container">
                <Card title="Empresas" subTitle="Empresas atendidas">
                    <Form
                        onSubmit={handleSubmit}
                        render={({ handleSubmit, form, submitting, pristine, values }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="p-grid">
                                    <div className="p-col-11">
                                        <Input name="descricao" label="Nome da empresa" />
                                    </div>
                                    <div className="p-col-1">
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

export default EmpresasForm;
