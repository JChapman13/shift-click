import { useState, useEffect } from "react";
import axios from "axios";

function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [formEmployee, setFormEmployee] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    address: "",
    position: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getEmployees();
    console.log(employees);
  }, []);

  function getEmployees() {
    axios({
      method: "GET",
      url: "/employees/",
    })
      .then((response) => {
        const data = response.data;
        console.log(data);
        setEmployees(data);
        console.log(isLoading);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
          setIsLoading(false);
        }
      });
  }

  function createEmployee(event) {
    event.preventDefault();
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

  function deleteEmployee(id) {
    axios({
      method: "DELETE",
      url: `/employees/${id}/`,
    }).then((response) => {
      getEmployees();
    });
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setFormEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  }

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <>
      <form className="create-employee">
        <input
          onChange={handleChange}
          text={formEmployee.name}
          name="name"
          placeholder="Name"
          value={formEmployee.name}
        />
        <input
          onChange={handleChange}
          text={formEmployee.surname}
          name="surname"
          placeholder="Surname"
          value={formEmployee.surname}
        />
        <input
          onChange={handleChange}
          text={formEmployee.phoneNumber}
          name="phoneNumber"
          placeholder="Phone Number"
          value={formEmployee.phoneNumber}
        />
        <input
          onChange={handleChange}
          text={formEmployee.email}
          name="email"
          placeholder="Email"
          value={formEmployee.email}
        />
        <input
          onChange={handleChange}
          text={formEmployee.address}
          name="address"
          placeholder="Address"
          value={formEmployee.address}
        />
        <input
          onChange={handleChange}
          text={formEmployee.position}
          name="position"
          placeholder="Position"
          value={formEmployee.position}
        />
        <button onClick={createEmployee}>Create Employee</button>
      </form>
      <h3>Employee List</h3>
      {employees.map((e) => {
        return [
          <li>
            {e.name}
            {e.surname}
            {e.phoneNumber}
            {e.email}
            {e.address}
            {e.position}
          </li>,
        ];
      })}
    </>
  );
}
export default EmployeePage;
