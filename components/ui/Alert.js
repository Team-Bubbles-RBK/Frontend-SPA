import {useState, Component} from 'react';
import {Alert, Fade} from "react-bootstrap";

class AlertDismissibleExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            pop: false
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

// const AlertDismissibleExample = () => {
//     // function AlertDismissibleExample() {
//     const [show, setShow] = useState(true);
//     //
//     //     if (show) {
//     return (
//         <Alert variant="danger" onClose={() => setShow(false)} dismissible>
//             <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
//             <p>
//                 Change this and that and try again. Duis mollis, est non commodo
//                 luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
//                 Cras mattis consectetur purus sit amet fermentum.
//             </p>
//         </Alert>
//     );
// // }
// //     return <Button onClick={() => setShow(true)}>Show Alert</Button>;
// // }
// };
export default AlertDismissibleExample;