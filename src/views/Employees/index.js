import { addEmployeesId, deleteEmployeesId } from "ducks/employees/actions";
import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import "styles/base/checkbox.scss";
import "styles/components/Employees.scss";

function Employees(props) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const dispatch = useDispatch();

  const { employees, employeesIds } = useSelector((store) => store.employees);

  const _addEmployeesId = (id) => dispatch(addEmployeesId(id));

  const _deleteEmployeesId = (id) => dispatch(deleteEmployeesId(id));

  const onIdsChange = (ev) => {
    employeesIds.includes(ev.target.id)
      ? _deleteEmployeesId(ev.target.id)
      : _addEmployeesId(ev.target.id);
  };

  const setChecked = (id) => (employeesIds.includes(id) ? true : false);

  return (
    <div className="employees-page__employees">
      <h1 className="employees-page__title employees-page__title_employees">
        Employees
      </h1>
      <div className="employees-page__wrapper">
        {alphabet.map((letter) => {
          return (
            <ul className="employees-page__list-employees">
              <h1 className="employees-page__letter-employees">{letter}</h1>

              {employees.some((em) => em.lastName[0] === letter) ? (
                employees
                  .filter((em) => em.lastName[0] === letter)
                  .map((em) => (
                    <li key={em.id} className="employees-page__item">
                      <input
                        className="employees-page__checkbox"
                        type="checkbox"
                        id={em.id}
                        onChange={onIdsChange}
                        defaultChecked={setChecked(em.id)}
                      />
                      <label for={em.id}>
                        {em.lastName} {em.firstName}
                      </label>
                    </li>
                  ))
              ) : (
                <div>--</div>
              )}
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Employees;
