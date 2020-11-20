import { Component } from "react";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            players: null,
            currUrlPath: ""
        }
    };

    componentDidMount() {
        fetch("http://localhost:5000/api/GetUsers", {
            mode: "cors"
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        players: result,
                        currUrlPath: window.location.pathname
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            );
    }

    render() {
        const { error, players, currUrlPath } = this.state;

        if (error != null){
            return <span>{error}</span>
        }

        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="nav navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href={currUrlPath.replace("Overlord", "Hero")}>Hero</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={currUrlPath.replace("Hero", "Overlord")}>Overlord</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Other Heroes
                            </a>
                            <div id="other-heroes-dropdown-menu" className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {this.getDropdownValues(players)}
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

    getDropdownValues(players) {
        if (players == null) {
            return;
        }

        // e.g. /Name/Hero
        const splitted = this.state.currUrlPath.split("/");
        const playerName = splitted[1];
        const currentPage = splitted[2];

        const values = [];

        for (let i = 0; i < players.length; i++) {
            if (players[i] != playerName) {
            values.push(<a class="dropdown-item" href={"/" + players[i] + "/" + currentPage}>{players[i]}</a>);
            }
            
        }

        return values;
    }
}

export default Navigation;