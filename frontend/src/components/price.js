import React from 'react';

const Price = (props) => {
    return <div className="divField"><label>Load Price:</label>
        <div>
            <input
                className={'price'}
                type="text"
                name="price"
                value={props.price}
                onChange={(evt) => props.setPrice(evt.target.value)}
            />
            <div className={'currency'}>
                <select
                    value={props.currency}
                    onChange={(evt) => {props.changeCurrency(evt.target.value)}}
                >
                    <option value="CAD">CAD</option>
                    <option value="USD">USD</option>
                </select>
            </div>
            <input
                type="text"
                name="conversion_rate"
                value={props.conversionRate}
                className={'conversion-rate'}
                onChange={(evt) => props.setConversionRate(evt.target.value)}/>
        </div>
        {props.price === '' && <small className="validation-message">*Enter valid price</small>}
    </div>
}

export default Price;
