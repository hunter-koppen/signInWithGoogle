import { Component, createElement } from "react";

import { LoginButton } from "./components/LoginButton";

export class SignInWithGoogle extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

    render() {
        return (
            <LoginButton
                clientId={this.props.clientId}
                type={this.props.type}
                shape={this.props.shape}
                text={this.props.text}
                size={this.props.size}
                theme={this.props.theme}
                responseString={this.props.responseString}
            />
        );
    }
}
