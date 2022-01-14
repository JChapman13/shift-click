import { useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import CreateEmployeePage from "../CreateEmployeePage/CreateEmployeePage";

function EmployeePage(props) {
  useEffect(() => {
    props.getEmployees();
    console.log(props.employees);
  }, []);

  function deleteEmployee(e) {
    console.log(e.id);
    axios({
      method: "DELETE",
      url: `/employees/${e}/`,
    }).then((response) => {
      props.getEmployees();
    });
  }

  if (props.isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <>
      <CreateEmployeePage />
      <h3>Employee List</h3>
      {props.employees.map((e) => {
        return [
          <p>
            Name: {e.name}
            <br />
            Surname: {e.surname}
            <br />
            Phone Number: {e.phoneNumber}
            <br />
            Email: {e.email}
            <br />
            Address: {e.address}
            <br />
            Position: {e.position}
            <br />
            <Button
              variant="outlined"
              id={e.id}
              onClick={() => deleteEmployee(e.id)}
            >
              Delete
            </Button>
          </p>,
        ];
      })}
    </>
  );
}
export default EmployeePage;
