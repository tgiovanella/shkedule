import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import {history} from 'react-router-dom';

export default function Navigator(){
    const itens = [
        {
            label : "Empresas",
            icon : 'pi pi-fw pi-briefcase',
            command :  () => window.location = "/empresas"
        }, 
        {separator : true},
        {
            label : "Projetos",
            icon : 'pi pi-fw pi-ticket',
            command :  () => window.location = "/projetos"            
        },
        {
            label : "Atividades",
            icon : 'pi pi-fw pi-list',
            command :  () => window.location = "/atividades"            
        },
        {
            label : "Usuarios",
            icon : 'pi pi-fw pi-user',
            command :  () => window.location = "/usuários"            
        },
        {
            label : "Meu Perfil",
            icon : 'pi pi-fw pi-id-card',
            command :  () => window.location = "/perfil"            
        }        
    ]

    return(
        <Menubar
        model = {itens}
        end = {
         <Button label="Sair" icon="pi pi-power-off" className="p-button-raised p-button-rounded"/>              
        }
        />
    );

}