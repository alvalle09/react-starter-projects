import React, { useState } from 'react'

import './styles.css';

// Comnponents
import UseStateExample from './UseStateExample';
import UseEffectExample from './UseEffectExample';

export default props =>  {
   const [example, setExample] = useState('UseStateExample');

   return (
       <>
        <h1>Choose an example</h1>
        <button onClick={() => setExample('UseStateExample')}>
            useState Example
        </button>
        <button onClick={() => setExample('UseEffecExample')}>
            useEffect Example
        </button>

        <div className="container">
            {
                example === 'UseStateExample' ? (
                    <UseStateExample />
                 ) : (
                    <UseEffectExample />
                 )
            }

        </div>

       </>
   )
}

