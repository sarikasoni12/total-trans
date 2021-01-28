import React from 'react';
import {domain} from "../common/constants";
import {get} from "../common/api";

const UploadFiles = (props) => {

    const onFileChange = (e, index) => {
        props.onFileChange(e, index);
    };

    const download = (index) => {
        get(`/trip/${props.tripId}/document/${props.documents[index]}`)
            .then(res => {
                console.log(res);
            })
    }
    return <div>
        <div>
            <label>Upload document 1:</label>
            {props.documents[0]
            && <a href={`${domain}/api/trip/${props.tripId}/document/${props.documents[0].id}`} target={"_blank"}>
                <img src={`${domain}/images/download.png`} className={"icon"}/></a>}
            <input type="file" name="file" onChange={(e) => {onFileChange(e,0)}}/>
        </div>
        <div>
            <label>Upload document 2:</label>
            {props.documents[1]
            && <a href={`${domain}/api/trip/${props.tripId}/document/${props.documents[1].id}`} target={"_blank"}>
                <img src={`${domain}/images/download.png`} className={"icon"}/></a>}
            <input type="file" name="file" onChange={(e) => {onFileChange(e, 1)}}/>
        </div>
        <div>
        <label>Upload document 3:</label>
            {props.documents[2]
            && <a href={`${domain}/api/trip/${props.tripId}/document/${props.documents[2].id}`} target={"_blank"}>
                <img src={`${domain}/images/download.png`} className={"icon"}/></a>}
        <input type="file" name="file" onChange={(e) => {onFileChange(e,2)}}/>
        </div>
        <div>
            <label>Upload document 4:</label>
            {props.documents[3]
            && <a href={`${domain}/api/trip/${props.tripId}/document/${props.documents[3].id}`} target={"_blank"}>
                <img src={`${domain}/images/download.png`} className={"icon"}/></a>}
            <input type="file" name="file" onChange={(e) => {onFileChange(e,3)}}/>
        </div>
    </div>
}

export default UploadFiles;
