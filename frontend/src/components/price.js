import React from 'react';

const Price = (props) => {
    return <React.Fragment>
        <div className="form-group">
        <label >Load Price:</label>
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">
                <select
                    value={props.currency}
                    onChange={(evt) => {props.changeCurrency(evt.target.value)}}
                >
                    <option value="CAD">CAD</option>
                    <option value="USD">USD</option>
                </select>
                </span>
            </div>
            <input
                className={'form-control col-md-5'}
                type="text"
                name="price"
                value={props.price}
                onChange={(evt) => props.setPrice(evt.target.value)}
            />
            <div className="input-group-append">
                <input
                    className={'col-md-4'}
                    type="text"
                    name="conversion_rate"
                    value={props.conversionRate}
                    onChange={(evt) => props.setConversionRate(evt.target.value)}
                />
            </div>

            {/*<div className="input-group-append">*/}
            {/*    <span className="input-group-text">*/}
            {/*     <input*/}
            {/*        type="text"*/}
            {/*        name="conversion_rate"*/}
            {/*        value={props.conversionRate}*/}
            {/*        className={'form-control'}*/}
            {/*        onChange={(evt) => props.setConversionRate(evt.target.value)}*/}
            {/*    />*/}
            {/*    </span>*/}
            {/*</div>*/}
        </div>
        </div>
    </React.Fragment>
}

export default Price;
