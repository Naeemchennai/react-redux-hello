import { connect } from 'react-redux'
import React from 'react'
import getDataRest from '../thunk/RestFunctions'

class RestCall extends React.Component {
    render() {
        return (
            <div>
                <p><h1>Fetch Data using Redux Thunk</h1></p>
                <p>{this.props.data}</p>
                <button onClick={this.props.getData}>Get Data</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.dataReducer.status
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getDataRest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestCall);