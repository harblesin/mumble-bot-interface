import React, { Component, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './PostMenu.module.css';
import Form from '../Components/Inputs';
import API from "../utils/userAPI";

const PostMenu = (props) => {


    const [ status, setStatus] = useState();
    const [ file, setFile ] = useState();

    const onChange = (e) => {
        let { name, value } = e.target;
        setStatus({ [name]: value });
    }

    const handleFile = (e) => {
        // let file = new FormData(e.target.files[0]);
        // console.log(file)
        // file.append('username', "whoknows");
        // file.append('file', e.target.files[0]);

        // console.log(file.entries())


        console.log("HET DUDE WHATS UP")



        let file = e.target.files[0];

        // let fun = new FormData();

        // fun.append('newFile', e.target.files);

        // API.upload()


        setFile({ file });
    }

    const sendUpload = (e) => {
        e.preventDefault();

        let uploadFile = new FormData();

        // uploadFile.append(file)


        // console.log(file)




        uploadFile.append('file', file);

        API.upload( (uploadFile) );

    }

    return (
        <div className={styles.div}>
            <form>
                <Row>
                    <Col xs={{ span: 12 }}>
                        <Form.TextArea label='status' name='status' onChange={onChange} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.FileUpload name="image" onChange={handleFile} />
                    </Col>
                    <Col xs={{ span: 3 }}>
                        <Form.Button label='Post' onClick={sendUpload} />
                    </Col>
                </Row>
            </form>
        </div>
    )
}

export default PostMenu;