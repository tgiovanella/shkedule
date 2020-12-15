import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';


export default function Navigator(){
    const itens = [
        {
            label : "Empresas",
            icon : 'pi pi-fw pi-briefcase'            
        }, 
        {separator : true},
        {
            label : "Projetos",
            icon : 'pi pi-fw pi-ticket'            
        },
        {
            label : "Atividades",
            icon : 'pi pi-fw pi-list'            
        },
        {
            label : "Usuarios",
            icon : 'pi pi-fw pi-user'            
        },
        {
            label : "Meu Perfil",
            icon : 'pi pi-fw pi-id-card'            
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