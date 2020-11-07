import { Component } from "react";

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            player: null
        }
    };

    componentDidMount() {
        fetch("https://awesomedescent.azurewebsites.net/api/GetUser?username=Helya", {
            mode: "no-cors"
        }) 
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        player: result
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    render() {
        const { error, player } = this.state;
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="nav navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Hero</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Overlord</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Other Heroes
                            </a>
                            <div id="other-heroes-dropdown-menu" className="dropdown-menu" aria-labelledby="navbarDropdown">
                            </div>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" asp-controller="home" asp-action="index">User Selection</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Player;