import { Field } from 'react-final-form';

export default function FormContainer(FormField, props) {
    return (
        <div {...props}>
            {FormField}
        </div>
    )
}