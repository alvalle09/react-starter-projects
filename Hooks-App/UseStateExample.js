import React from 'react'

const  UseStateExample= () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formValues, setFormValues] = useState( {
        name: '',
        age: '',
        fruit: ''
    });

    const handleChange  = e => {
        const updateFormValues = {
            ...formValues, 
            [e.target.id]: e.target.value
        };

        setFormValues(updateFormValues);
    }

    const handleSubmit = e => {
        // prevents full page reload
        e.preventDefault();
        setShowMessage(true);
    }

    return (
        // React fragment
        <>
            <p>Complete the form below and see a nice message about yourself!</p>
            <form onSubmit="(handleSubmit)">

            </form>
        </>
    )
}

export default UseStateExample;
