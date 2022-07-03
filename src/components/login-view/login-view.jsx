import react from "react";

export class Loginview extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            pasword: ''
        };

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    onPasswordChange(event) {
        this.setState({
            pasword: event.target.value
        });
    }

    handleSubmit() {
        const { username, password } = this.state;
        console.log(username, password);
    }

    render() {
        return (
            <form>
                <label>
                    Username:
                    <input type="text" value={this.state.username} onChange={this.onUsernameChange} />    
                </label>
                <label>
                    Password:
                    <input type="password" value={this.state.pasword} onChange={this.onPasswordChange}/>
                </label>
                <button type="button" onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
}