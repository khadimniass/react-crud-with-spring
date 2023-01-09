// import axios from 'axios';
import axios from "axios";

export const EMPLOYEE_URL = 'http://127.0.0.1:8080/api/v1/employees';

export  class EmployeeService{
        // getEmployees(){
        //     return axios.get(EMPLOYEE_URL)
        // }
    createEmployee(employee){
        return axios.post(EMPLOYEE_URL,employee)
    }
}
//export default new EmployeeService();