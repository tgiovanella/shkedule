import './App.css';
import { Card } from 'primereact/card';
import { Form } from 'react-final-form';
import { Input } from './Components/Input';
import { Button } from 'primereact/button';
import React from 'react';

const handleSubmit = () => {

}

function ProjetosForm(props) {

    return (
        <div>            
            <div className="container">
                <Card title="Projetos" subTitle="Projetos que estou envolvido">
                    <Form
                        onSubmit={handleSubmit}
                        render={({ handleSubmit, form, submitting, pristine, values }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="p-grid">
                                    <div className="p-col-8">
                                        <Input name="descricao" label="Identificação do projeto" />
                                    </div>
                                    <div className="p-col-8">
                                        <Input name="valor_hora" label="Valor da hora" />
                                    </div>
                                </div>
                                <div className="p-grid">
                                    <div className="p-col-8">
                                        <Input name="descricao" label="Identificação do projeto" />
                                    </div>
                                    <div className="p-col-8">
                                        <Input name="valor_hora" label="Valor da hora" />
                                    </div>
                                    <div className="p-col-12">
                                        <Button label="Enviar" icon="pi pi-send" />
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

export default ProjetosForm;
