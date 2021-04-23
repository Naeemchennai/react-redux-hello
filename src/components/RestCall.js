import { connect } from 'react-redux'
import React from 'react'
import getDataRest from '../thunk/RestFunctions'

class RestCall extends React.Component {
    render() {
        return (
            <div>
                <p><h1>Fetch Data using Redux Thunk</h1></p>
                <p>{this.props.data}</p>
                <p>ID:{this.props.posts.id}</p>
                <p>AUTHOR:{this.props.posts.author}</p>
                <p>TITLE:{this.props.posts.title}</p>
                <button onClick={this.props.getData}>Get Data</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.dataReducer.status,
        posts: state.dataReducer.posts
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getDataRest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestCall);