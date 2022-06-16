import { useState } from "react";
import Button from "./Button";
import Field from "./Field";

const style = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem 0',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default function TaskForm({isTimerStarted, onSubmit}) {

    const [formValue, setFormValue] = useState({
        title: '',
        description: ''
    });

    const handleSubmitForm = (e) => {
        e.preventDefault();
        onSubmit({
            title: formValue.title,
            description: formValue.description
        });
    }

    return(
        <form style={style.form} onSubmit={handleSubmitForm}>
            <Field value={formValue.title} onChange={(v) => setFormValue({...formValue, title: v})} type={'text'} label={'Title'} placeholder={'Add title to your task'} validation={{type: 'string', required: true, length: 4}} />
            <Field value={formValue.description} onChange={(v) => setFormValue({...formValue, description: v})} type={'textarea'} label={'Description'} placeholder={'Add description to your task'} validation={{type: 'string'}} />
            <Button color={isTimerStarted ? 'sandybrown' : 'tomato'} type={'submit'}>
                {isTimerStarted ? 'Stop' : 'Start'}
            </Button>
        </form>
    )
}