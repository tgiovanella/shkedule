import './App.css';
import { Card } from 'primereact/card';
import { Form } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import React from 'react';

const handleSubmit = () => {

}

function ProjetosForm(props) {

    return (
        <div>            
            <div className="container">
                <Card title="Projetos" subTitle="Projetos que estou envolvido">
                    <Divider/>
                    <Form
                        onSubmit={handleSubmit}
                        render={({ handleSubmit, form, submitting, pristine, values }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="p-grid">
                                    <div className="p-col-8 p-float-label">
                                        <InputText name="descricao" className="form-field" label="Identificação do projeto" />
                                        <label htmlFor="descricao">Descrição do Projeto</label> 
                                    </div>
                                    <div className="p-col-4">
                                        <div className="p-inputgroup ">
                                            <span className="p-inputgroup-addon">R$</span>
                                            <div className="p-float-label">
                                            <InputText type="currency" name="valor_hora" className="form-field" label="Valor da hora" />
                                            <label htmlFor="valor_hora">Valor hora para o projeto</label>
                                            </div> 
                                        </div>
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
