import axios from "axios";

const BASEURL =
  "https://randomuser.me/api/?results=50&inc=login,name,phone,email,picture&nat=us";

// Export an object with a "search" method that searches the randomUser API
export default {
  getEmployee: function () {
    return axios.get(BASEURL);
  },
};
