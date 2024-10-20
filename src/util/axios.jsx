import axios from "axios";

const Axios = axios.create((
    // eslint-disable-next-line no-undef
    timeout = 30000
));

export default Axios;