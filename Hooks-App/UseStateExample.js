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
        e.preventDefault();
        setShowMessage(true);
    }


    return (
        <div>
            
        </div>
    )
}

export default UseStateExample;
