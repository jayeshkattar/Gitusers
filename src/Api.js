import axios from 'axios';

export default {
    fetchUserData: function (name) {
        var URL = 'https://api.github.com/users/' + name;

        return axios.get(URL).then(function (repsonse) {
            return repsonse;
        })
    }
};