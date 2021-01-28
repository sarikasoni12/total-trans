import React from 'react';

const Checkbox = (props) => {

    return <div><input type="checkbox"
                       value={props.value}
                       checked={props.checked}
                       onChange={props.onChange}/>
                       {props.label}
    </div>
}

export default Checkbox;
