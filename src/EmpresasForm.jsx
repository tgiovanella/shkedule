import './App.css';
import { Card } from 'primereact/card';
import { Form } from 'react-final-form';
import {Input } from './components/forms/Input';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import {postEmpresas} from './Controllers/empresasController';
import { Messages } from 'primereact/messages';
import { Message } from 'primereact/message';
import React, { useEffect, useRef, useState } from 'react';

const handleSubmit = (values) => {
    console.info(values);
    postEmpresas(values).then(resp => {     
        this.setMsg(true)   ;
        return resp;
    })
}

function EmpresasForm(props) {

    const [msg, setMsg] = useState(false)
    const [values, setValues] = useState({})

    useEffect(() => {
        if(msg === true){
            messages.current.show({severity: 'success', summary: 'Gravado!', detail: 'Registro gravado com sucesso.'});
        }
        setMsg(false);
    },[msg]);

    const messages = useRef();    

    return (
        <div>            
            <div className="container">
                <Card title="Empresas" subTitle="Empresas atendidas">
                <Messages ref={messages}></Messages>
                <Divider />
                    <Form
                        onSubmit={handleSubmit}
                        render={({ handleSubmit, form, submitting, pristine, values, setValues }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="p-grid">
                                    <div className="p-col-12 p-float-label">
                                        <Input name="descricao" label="Nome da empresa" className="form-field"/>
                                    </div>
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

export default EmpresasForm;
