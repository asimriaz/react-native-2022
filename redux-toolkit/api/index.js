import axios from "axios";

export default axios.create({
    baseURL: 'http://10.0.131.225:3000/'
})