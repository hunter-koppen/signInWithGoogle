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
        const { clientId, type, shape, text, size, width, theme, responseString } = this.props;
        let btnWidth = null;
        if (width && width.value) {
            btnWidth = width.value;
        }

        return (
            <LoginButton
                clientId={clientId}
                type={type}
                shape={shape}
                text={text}
                size={size}
                width={btnWidth}
                theme={theme}
                responseString={responseString}
            />
        );
    }
}
