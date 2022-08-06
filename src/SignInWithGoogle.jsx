import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/SignInWithGoogle.css";

export class SignInWithGoogle extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
