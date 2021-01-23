import axios from "axios";

const BASEURL = "https://randomuser.me/";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getEmployee: function() {
    return axios.get(BASEURL);
  }
};
