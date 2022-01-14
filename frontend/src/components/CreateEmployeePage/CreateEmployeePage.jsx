import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import getEmployees from "../EmployeePage/EmployeePage";

function CreateEmployeePage() {
  const [formEmployee, setFormEmployee] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    address: "",
    position: "",
  });
  function handleChange(event) {
    const { value, name } = event.target;
    setFormEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  }
  function createEmployee(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/employees/",
      data: {
        name: formEmployee.name,
        surname: formEmployee.surname,
        phone_number: formEmployee.phoneNumber,
        email: formEmployee.email,
        address: formEmployee.address,
        position: formEmployee.position,
      },
    }).then((response) => {
      getEmployees();
    });

    setFormEmployee({
      name: "",
      surname: "",
      phoneNumber: "",
      email: "",
      address: "",
      position: "",
    });
  }
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={handleChange}
          text={formEmployee.name}
          name="name"
          label="Name"
          value={formEmployee.name}
          variant="standard"
        />
        <TextField
          onChange={handleChange}
          text={formEmployee.surname}
          name="surname"
          label="Surname"
          value={formEmployee.surname}
          variant="standard"
        />
        <TextField
          onChange={handleChange}
          text={formEmployee.phoneNumber}
          name="phoneNumber"
          label="Phone Number"
          value={formEmployee.phoneNumber}
          variant="standard"
        />
        <TextField
          onChange={handleChange}
          text={formEmployee.email}
          name="email"
          label="Email"
          value={formEmployee.email}
          variant="standard"
        />
        <TextField
          onChange={handleChange}
          text={formEmployee.address}
          name="address"
          label="Address"
          value={formEmployee.address}
          variant="standard"
        />
        <TextField
          onChange={handleChange}
          text={formEmployee.position}
          name="position"
          label="Position"
          value={formEmployee.position}
          variant="standard"
        />

        <Button variant="outlined" onClick={createEmployee}>
          Create Employee
        </Button>
      </Box>
    </div>
  );
}

export default CreateEmployeePage;
