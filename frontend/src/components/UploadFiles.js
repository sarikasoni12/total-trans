import React from 'react';

const UploadFiles = (props) => {

    const onFileChange = (e, index) => {
        props.onFileChange(e, index);
    };
    return <div>
        <label>Upload document 1:</label> <input type="file" name="file" onChange={(e) => {onFileChange(e,0)}}/><br/>
        <label>Upload document 2:</label> <input type="file" name="file" onChange={(e) => {onFileChange(e, 1)}}/><br/>
        <label>Upload document 3:</label> <input type="file" name="file" onChange={(e) => {onFileChange(e,2)}}/><br/>
    </div>
}

export default UploadFiles;
