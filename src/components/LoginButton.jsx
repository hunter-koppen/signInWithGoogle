import React, { Component, createElement } from "react";

export class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.nodeRef = React.createRef();
    }

    componentDidMount() {
        window.onGoogleLibraryLoad = () => {
            console.log(this.props);
            const { clientId, type, shape, text, size, theme } = this.props;

            google.accounts.id.initialize({
                client_id: clientId.value,
                callback: this.onResponse
            });

            google.accounts.id.renderButton(this.nodeRef.current, {
                type,
                theme,
                size,
                text,
                shape
            });
        };
    }

    onResponse = response => {
        console.log(response);
        this.props.responseString.setValue(response.credential);
    };

    render() {
        return <div ref={this.nodeRef} />;
    }
}
