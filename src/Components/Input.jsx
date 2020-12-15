import { memo } from 'react';
import { Field } from 'react-final-form';
import {InputText} from 'primereact/inputtext';

export const Input = props => {
    return (
        <Field name={props.name}>
            {(props) => (
                <InputText {...props} style={{width: `100%`}} />
            )}
        </Field>
    )
}


