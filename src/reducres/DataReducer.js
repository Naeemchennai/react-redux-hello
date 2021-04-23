const intialState = {
    posts: [{
        "id": 1,
        "title": "json-server",
        "author": "typicode"
    }],
    status: "SAD"
}


const dataReducer = (state = intialState, action) => {

    switch (action.type) {
        case 'GET_DATA_SUCCESS':
            return { ...state, status: "SUCCESS" }
        case 'GET_DATA':
                return { ...state, status: "LOADING" }
        case 'GET_DATA_FAILURE':
            return { ...state, status: "FAILED" }
        default:
            return state;
    }
}

export default dataReducer;

