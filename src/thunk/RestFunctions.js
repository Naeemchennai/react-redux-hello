import axios from 'axios'
const getDataRest = () => {
    return (dispatch) => {
        dispatch({ type: 'GET_DATA' })

        return axios.get('http://localhost:3000/posts')
            .then(
                user => dispatch({ type: 'GET_DATA_SUCCESS', user }),
                err => dispatch({ type: 'GET_DATA_FAILURE', err })
            );
    };
};

export default getDataRest;