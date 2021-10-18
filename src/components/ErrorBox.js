import React from 'react';
import AppMode from './AppMode.js'

class ErrorBox extends React.Component {

constructor(props){
    super(props);
    this.state = {emailValid: false,
                    passwordValid:false}
}



render() {

    if (this.state.emailValid && this.state.passwordValid) {
        return null;
    }
    if (!this.state.emailValid && this.state.passwordValid) {
        return (
            <p id="errorBox" className="alert alert-danger centered">
                    <a id="emailError" href="#email" 
                        className="alert-link" 
                        ref={this.emailError}>
                        Enter a valid email address<br/>
                    </a>
            </p>
        );
    }
    if (this.state.emailValid && !this.state.passwordValid) {
            return (
                <p id="errorBox" className="alert alert-danger centered">
                        <a id="passwordError" 
                            href="#password" 
                            className="alert-link" 
                            ref={this.passwordError}>
                            Enter a valid password
                        </a>
                </p>
            );
    }
    //If here, both email and password are invalid
    return (<p id="errorBox" className="alert alert-danger centered">
                    <a id="emailError" href="#email" 
                        className="alert-link" 
                        ref={this.emailError}>
                        Enter a valid email address<br/>
                    </a>
                    <a id="passwordError" 
                        href="#password" 
                        className="alert-link" 
                        ref={this.passwordError}>
                        Enter a valid password
                    </a>
                </p>);

}

}


export default ErrorBox;