import React from "react";
import "styles/components/EmployeesBirthday.scss";
import { useSelector } from "react-redux";

function EmployeesBirthday() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { employees, employeesIds } = useSelector((store) => store.employees);

  const selectedEmployees = employees
    .filter((em) => employeesIds.includes(em.id))
    .map((em) => {
      const dobDate = new Date(em.dob);
      return { ...em, dobDate };
    });

  return (
    <div className="employees-page__birth">
      <div className="employees-page__birth-wrapper">
        <h1 className="employees-page__title employees-page__title_birth">
          Employees birthday
        </h1>
        <div className="employees-page__wrapper">
          {!employeesIds.length
            ? "No selected employees"
            : months.map((m, i) => {
                return selectedEmployees.some(
                  ({ dobDate }) => dobDate.getMonth() === i
                ) ? (
                  <ul className="employees-page__list-birth">
                    <h1 className="employees-page__letter-birth">{m}</h1>
                    {selectedEmployees
                      .filter(({ dobDate }) => dobDate.getMonth() === i)
                      .map((em) => (
                        <li className="employees-page__birth-item">
                          {em.lastName} {em.firstName} - {em.dobDate.getDate()}{" "}
                          {months[em.dobDate.getMonth()]}{" "}
                          {em.dobDate.getFullYear()}
                        </li>
                      ))}
                  </ul>
                ) : (
                  false
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default EmployeesBirthday;
