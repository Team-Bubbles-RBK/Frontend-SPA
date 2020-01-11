import {useState, Component} from 'react';
import {Alert} from "react-bootstrap";

class AlertDismissibleExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };

        // Auto-hide the alert after 5 seconds
        setTimeout(() => {
            this.setState({
                show: false
            });
        }, 5000);

        this.displayHandler = this.displayHandler.bind(this);
    }

    displayHandler(to) {
        this.setState({
            show: to
        });
    }

    render() {
        const {msg, type, heading} = this.props;
        return (
            this.state.show ? (
                <Alert variant={type} onClose={() => this.displayHandler(false)} dismissible>
                    <Alert.Heading>{heading}</Alert.Heading>
                    <p>
                        {msg}
                    </p>
                </Alert>) : ''
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