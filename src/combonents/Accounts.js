import axios from 'axios'
const EMPLOYEE_API_BASE_URL = "https://humanlyapp.herokuapp.com/api/user";
class Accounts {
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
}
export default new Accounts()