import { getByTitle } from "@testing-library/react";
import React from "react";
import { Button, Card, InputGroup, FormControl } from 'react-bootstrap';
import '../Components/FormInput.css';


const FormInput = (props) => {
    return (

        <>
            <h4>Adding A New Movie:</h4>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup1">Title</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="title" onChange={props.handleChange} />
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup2">Rate</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="rate" onChange={props.handleChange} />
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup3">Year</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="year" onChange={props.handleChange} />
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup4">Description</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="description" onChange={props.handleChange} />
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup5">Img</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="img" onChange={props.handleChange} />
            </InputGroup>
            <Button onClick={props.addNewMovie} className="Button" variant="success">Add New Movie</Button>

        </>
    )
}

export default FormInput;