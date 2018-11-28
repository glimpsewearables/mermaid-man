import React from 'react';

const TextField = (props) => {
    return (
        <div>
            <label >{props.title}:</label> <br />
            <input
                type="text"
                value={props.name}
                onChange={props.onChange}
            />
        </div>
    );
};

export default TextField;