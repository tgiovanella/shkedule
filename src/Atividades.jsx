import "./App.css";
import Navigator from "./Template/Navigator";
import { Card } from "primereact/card";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import AtividadesForm from "./AtividadesForm";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

function Atividades() {
  const [dialogDisplay, setdiaglogDisplay] = useState(false);
  const dados = [
    {
      codigo: 1,
      descricao: "Thiago Giovanella",
      empresa: "Thiago Giovanella",
    },
    {
      codigo: 2,
      descricao: "SHKedule",
      empresa: "Thiago Giovanella",
    },
  ];

  return (
    <div>
      <Navigator />
      <div className="container">
        <Card title="Atividades" subTitle="Atividades em projetos que estou participando">
          <DataTable
            value={dados}
            className="p-datatable-responsive"
            paginator
            rows={50}
          >
            <Column field="codigo" style={{ width: "10%" }} header="Código" />
            <Column field="descricao" header="Descrição" />
            <Column field="projeto" header="Projeto" />
            <Column
              field="opcoes"
              style={{ width: "5%" }}
              header={
                <Button
                  className="p-button-rounded p-button-info"
                  icon="pi pi-plus"
                  onClick={() => {
                    setdiaglogDisplay(true);
                    console.log(`click`);
                  }}
                />
              }
            />
          </DataTable>
        </Card>
      </div>

      <Dialog
        header="Formulário de Atividades"
        style={{ width: `80vw` }}
        visible={dialogDisplay}
        closable={true}
        maximizable={true}
        onHide={() => setdiaglogDisplay(false)}
      >
        <AtividadesForm />
      </Dialog>
    </div>
  );
}

export default Atividades;
