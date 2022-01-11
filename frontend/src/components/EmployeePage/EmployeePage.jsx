import { useState, useEffect } from "react";
import axios from "axios";

function EmployeePage() {
  const [employees, setEmployees] = useState(null);
  const [formEmployee, setFormEmployee] = useState({
    name: "",
    surname: "",
    phone_number: "",
    email: "",
    address: "",
    position: "",
    is_admin: false,
  });

  useEffect(() => {
    getEmployees();
  }, []);

  function getEmployees() {
    axios({
      method: "GET",
      url: "/employees/",
    })
      .then((response) => {
        const data = response.data;
        setEmployees(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });

    return (
      <>
        <h1>Testing</h1>
      </>
    );
  }
}
export default EmployeePage;
