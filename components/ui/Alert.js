import {Component} from 'react';
import {Alert, Fade} from "react-bootstrap";

class AlertDismissibleExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
        this.displayHandler = this.displayHandler.bind(this);
    }

    displayHandler(to) {
        this.setState({
            show: to
        });
    }

    componentDidMount() {
        // Auto-hide the alert after 5 seconds
        setTimeout(() => this.setState({show: false}), 5000);
    }

    render() {
        const {msg, type, heading} = this.props;
        return (
            <Fade in={this.state.show}>
                <div>
                    <Alert transition={Fade} variant={type} onClose={() => this.displayHandler(false)} dismissible>
                        <Alert.Heading>{heading}</Alert.Heading>
                        <p>
                            {msg}
                        </p>
                    </Alert>
                </div>
            </Fade>
        );
    }
}

export default AlertDismissibleExample;