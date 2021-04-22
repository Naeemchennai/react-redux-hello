import { connect } from 'react-redux'
import React from 'react'


class Singin extends React.Component {
    render() {
        return (
            <div>
                <p><h1>Class Component</h1></p>
                <p>{this.props.count}</p>
                <button onClick={this.props.increment}>Increment</button>
                <button onClick={this.props.decrement}>Decrement</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.counterReducer.count
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Singin);