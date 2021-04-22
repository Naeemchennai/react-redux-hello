import { connect, useSelector, useDispatch } from 'react-redux'

const Login = ({ count, increment, decrement }) => {
    const counter = useSelector(state => state.count);
    return (
        <div>
            <div>
                <p><h1>Functional Component</h1></p>
                <p>{counter} using selector</p>
                <p>{count} using state</p>
                <button name="inc" onClick={increment} type="submit">Inc</button>
                <button name="dec" onClick={decrement} type="submit">Dec</button>
            </div>
        </div>
    )
}

function mapDispatchtoProps(dispatch) {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' })
    }
}
const mapStateToProps = state => {
    return { count: state.counterReducer.count }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Login);