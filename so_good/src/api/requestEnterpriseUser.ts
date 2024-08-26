import axios from 'axios'; 

const API_URL = "http://localhost:8442";

const AddEnterpriseUser = (API_URL: string) => {
    return axios.post(`${API_URL}/sogood/enterprise-user/`);
  };
  
  //AddEnterpriseUser()