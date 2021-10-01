import React, {useState} from 'react'

const  UseStateExample = () => {
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
        <>
            <p>Complete the form below and see a nice message about yourself!</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>What is your name?</label>
                <input id='name' value={formValues['name']} onChange={handleChange} />
                <br/>
                <label htmlFor='age'>How old are you?</label>
                <input id='age' value={formValues['age']} onChange={handleChange} />
                <br/>
                <label htmlFor='fruit'>What's your favorite fruit?</label>
                <select id='fruit' value={formValues['frtuit']} onChange={handleChange}>
                    <option>Bananas</option>
                    <option>Apples</option>
                    <option>Oranges</option>
                    <option>Strawberries</option>
                    <option>Pears</option>
                    <option>Dragon Fruit</option>
                    <option>Jack Fruit</option>
                </select>

                <button>Submit</button>
            </form>
            {showMessage && (
                <div className='form-message'>
                    <p>
                    Hi <strong>{formValues['name']}!</strong>, pleasure to meet you!!
                    I can't believe you're only <strong>{formValues['age']}</strong> years old.
                    </p>
                    <p>
                        My favorite fruit is also <strong>{formValues['fruit']}</strong>!!!
                    </p>                    
                </div>
            )}

        </>
    )
}

export default UseStateExample;
