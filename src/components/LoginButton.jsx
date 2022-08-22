import React, { Component, createElement } from "react";
import jwt_decode from "jwt-decode";

export class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.nodeRef = React.createRef();
    }

    componentDidMount() {
        window.onGoogleLibraryLoad = () => {
            const { clientId, type, shape, text, size, width, theme } = this.props;

            google.accounts.id.initialize({
                client_id: clientId.value,
                callback: this.onResponse
            });

            google.accounts.id.renderButton(this.nodeRef.current, {
                type,
                theme,
                size,
                text,
                shape,
                width
            });
        };
    }

    onResponse = response => {
        const JSONToken = jwt_decode(response.credential);
        const JSONString = JSON.stringify(JSONToken);
        this.props.responseString.setValue(JSONString);
    };

    render() {
        return <div ref={this.nodeRef} />;
    }
}
