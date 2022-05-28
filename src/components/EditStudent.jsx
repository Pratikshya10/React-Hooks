import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Style.css";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { store } from "./Detail";
import Students from "./Students";

function EditStudent() {
  const [student, setStudent] = useContext(store);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");

  useEffect(() => {
    Students.forEach((element) => {
      if (element.Id === id) {
        setName(element.Name);
        setAge(element.Age);
        setCourse(element.Course);
        setBatch(element.Batch);
      }
    });
  }, [id, student]);

  const submit = () => {
    setStudent((previousV) =>
      previousV.map((data) =>
        data.Id === id
          ? {
              Id: id,
              Name: name,
              Age: age,
              Batch: batch,
              Course: course,
            }
          : data
      )
    );
  };

  return (
    <>
      <Box
        className="container"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "60ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          id="outlined-name"
          label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <TextField
          id="outlined-name"
          label="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <TextField
          id="outlined-name"
          label="Batch"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        />
      </Box>
      <div className="btUp">
        <div><Link to="/students">
          <button className="btn btn-warning">
             Cancel 
          </button></Link>
        </div>
        <div><Link to="/students">
          <button className="btn btn-success " onClick={submit}>
             Update 
          </button></Link>
        </div>
      </div>
    </>
  );
}

export default EditStudent;