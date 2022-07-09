import { Component } from "react";

class Overlord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            player: null
        }
    };

    componentDidMount() {
        fetch("http://localhost:5000/api/GetUser?username=Helya", {
            mode: 'cors'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        player: result
                    });
                },
                // (error) => {
                //     this.setState({
                //         error
                //     });
                //     //console.log(error);
                // }
            );
    }

    render() {
        const { error, player } = this.state;

        if (error != null){
            return <span>{error}</span>
        }

        return (
            <div></div>
        );
    }
}

export default Overlord;