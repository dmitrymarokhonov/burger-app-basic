import axios from "axios";

const instance =  axios.create({
    baseURL: "https://react-my-burger-c539a.firebaseio.com/"
})

export default instance;