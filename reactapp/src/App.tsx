import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { ActionType } from './redux/action-types';
import { GoogleLogin } from 'react-google-login'
interface stateuser {
  token: string,
  name: string
}
interface statevalue {
  gmail: string,
  pass: string
}
class App extends React.Component<{ dispatch: Function, stateuser: stateuser }, { gmail: string, pass: string }> {
  constructor(props: any) {
    super(props)
    this.state = {
      gmail: '',
      pass: ''
    }
  }
  handleOnClick = () => {
    this.props.dispatch({
      type: ActionType.SAVE_TOKEN,
      payload: '1111222'
    })
  }
  onSucess = (res:any) => {
    console.log(res)
  }
  onFailure = (res:any) => {

console.log(res)
  }
  // componentDidMount() {
  //   console.log(this.props.stateuser)
  // }
  render() {
    return (
      <div>
        <h3>
          Please Login
        </h3>
        <input placeholder={'gmail'} value={this.state.gmail} onChange={e => this.setState({ gmail: e.target.value })} />
        <input placeholder={'password'} value={this.state.pass} onChange={e => this.setState({ pass: e.target.value })} />

        <button onClick={this.handleOnClick}>
          www
        </button>
        <GoogleLogin
          clientId={'646198018411-r36d7nllpj1v3vlfk7ehi9rrde4a4i1o.apps.googleusercontent.com'}
          buttonText={'Login'}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
          onSuccess={(res)=>{this.onSucess(res)}}
          onFailure={this.onFailure}
        />
        <p>
          {this.props.stateuser?.token}
        </p>
      </div>
    )
  }
}
const mapStateToProps = (state: any) => {
  return {
    stateuser: state?.user
  }
}
const mapDispatchToProps = (dispatch: any, payload: any) => ({
  saveToken: () => dispatch({ type: ActionType.SAVE_TOKEN, payload: '123' })
})
export default connect(mapStateToProps)(App)
