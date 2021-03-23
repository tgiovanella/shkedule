import "./App.css";
import Navigator from "./Template/Navigator";
import { Card } from "primereact/card";
import React, { useContext, useEffect, useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import EmpresasForm from "./EmpresasForm";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import {getUsuarios} from './Controllers/usuariosController';

function Usuarios() {
  
  const [dialogDisplay, setdiaglogDisplay] = useState(false);
  const [usuarios, setUsuarios] = useState(getUsuarios());

  useEffect(() => {
    getUsuarios().then(resp => {
        setUsuarios(resp.data);
    })
    
  },[dialogDisplay, setUsuarios]);
  
  return (
    <div>
      <Navigator />
      <div className="container">
        <Card title="Usuários" subTitle="Usuários do sistema">
          <DataTable
            value={usuarios}
            className="p-datatable-responsive"
            paginator
            rows={50}
          >
            <Column field="codigo" style={{ width: "10%" }} header="Código" />
            <Column field="nome" header="Nome" />
            <Column field="email" header="E-mail" />
            <Column
              field="opcoes"
              style={{ width: "5%" }}
              header={
                <Button
                  className="p-button-rounded p-button-info"
                  icon="pi pi-plus"
                  onClick={() => {
                    setdiaglogDisplay(true);
                  }}
                />
              }
            />
          </DataTable>
        </Card>
      </div>

      <Dialog
        header="Formulário de Empresas"
        style={{ width: `80vw` }}
        visible={dialogDisplay}
        closable={true}
        maximizable={true}
        onHide={() => setdiaglogDisplay(false)}
      >
        <EmpresasForm />
      </Dialog>
    </div>
  );
}

export default Usuarios;
