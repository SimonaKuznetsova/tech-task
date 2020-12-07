import React, { useEffect } from "react";
import Employees from "views/Employees";
import EmployeesBirthday from "views/EmployeesBirthday";
import { getEmployees } from "ducks/employees/actions";
import { useSelector, useDispatch } from "react-redux";
import "styles/components/EmployeesPage.scss";

function EmployeesPage(props) {
  const dispatch = useDispatch();

  const { employees } = useSelector((store) => store.employees);

  const _getEmployees = () => dispatch(getEmployees());

  useEffect(() => {
    if (!employees.length) {
      _getEmployees();
    }
  }, []);

  return (
    <div className="employees-page">
      <Employees />
      <EmployeesBirthday />
    </div>
  );
}

export default EmployeesPage;
