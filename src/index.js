// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText() {
//     return 'Click on me!'
// }

// Create a React component
const App = () => {
    const buttonText = { text: 'click me'};

    return (
        <div>
            <label className='label' htmlFor='name'>
                Enter Name:
            </label>
            <input id='name' type='text' />
            <button style={{ backgroundColor: 'blue', color:'white' }}>
                {buttonText.text}
            </button>
        </div>
    )
};

// Take the React Component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
