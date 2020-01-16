import axios from 'axios';
const instance=axios.create({
    baseURL:'https://burgerbuilder-56081.firebaseio.com/'

});


export default instance;