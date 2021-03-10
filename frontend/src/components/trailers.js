import React, {useEffect, useState} from 'react';
import {get} from "../common/api";

const Trailers = (props) => {

    let [trailers, setTrailers] = useState([]);

    useEffect(() => {
        get('/trailers')
            .then((res) => {
                setTrailers(res);
            });

    }, [])
    return <React.Fragment>
        <label for={"trailer"}>Trailer</label>
            <select
                className="form-control"
                id={"trailer"}
                name='trailer_unit' onChange={(evt) => props.addTrailer(evt.target.value)} value={props.trailerId}>
                <option value={''}> --</option>
                {trailers.map((trailer, index) => {
                    return <option value={trailer.id} key={`truck_unit_${index}`}>{trailer.name}</option>;
                })}
                <option value={'0'}> Other</option>
            </select>
            {/*{props.trailerId === '' && <small className="validation-message">*Enter valid trailer</small>}*/}
    </React.Fragment>
}

export default Trailers;
