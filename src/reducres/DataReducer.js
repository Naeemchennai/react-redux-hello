const intialState = {
    posts: {
        "id": "",
        "title": "",
        "author": ""
    },
    status: ""
}


const dataReducer = (state = intialState, action) => {

    switch (action.type) {
        case 'GET_DATA_SUCCESS':
            return { ...state, status: "SUCCESS", posts: action.posts.data[0] }
        case 'GET_DATA':
            return { ...state, status: "LOADING" }
        case 'GET_DATA_FAILURE':
            return { ...state, status: "FAILED" }
        default:
            return state;
    }
}

export default dataReducer;

