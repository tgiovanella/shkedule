import { Field } from 'react-final-form';
import {Dropdown} from 'primereact/inputtext';

export const Input = props => {
    return (
        <Field name={props.name}>
            {(props) => (
                <Dropdown {...props} style={{width: `100%`}} />
            )}
        </Field>
    )
}


