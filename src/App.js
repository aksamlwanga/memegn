import React, { Component } from "react"
import Todoitem from "./Todoitem"
import itemData from "./TodoData"
import Forms from "./Forms"


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            todos: itemData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    // the most important method among the selected ones ,its the one used to render objects in the webrowser
    render() {
        const items = this.state.todos.map(item => <Todoitem key={item.id} item={item} handleChange={this.handleChange} />)
        return (
            <div>
                <Header username="Aksam Lwanga" />
                <Greating />
                <State />
                <EventHandler />
                {items}
                <StateChanging />
                <h1>An example of conditonal rendering !</h1>
                <ReactLife />
                <h1>dealing with forms in react </h1>
                <ReactForms />
                <br /><br /><br /><br />
                <hr />
                <br />
                <h1>testing what have learnt</h1>
                <Forms />

            </div>

        )
    }



}
class Header extends React.Component {
    render() {
        return (
            <header>
                <p>Welcome,{this.props.username} !</p>
            </header>
        )

    }
}

class Greating extends React.Component {

    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning"
        }

        else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        }

        else {
            timeOfDay = "evening"
        }
        return (
            <h1> Good { timeOfDay} to you ,sir or madam!</h1>
        )

    }

}

class State extends Component {
    constructor() {
        super()
        this.state = {
            answer: false
        }
    }
    render() {
        return (
            <div>
                <h1> Is the state important to know ? {this.state.answer ? "yes" : "no"}</h1>

            </div>
        )
    }


}

class EventHandler extends Component {
    myfunction() {
        console.log(12)
    }
    render() {
        return (
            <div>
                <img src="image.jpg" id="ak" onMouseOver={this.myfunction} alt="" width="200px" />
                <br />
                <button onClick={() => window.prompt("i was clicked")}>click me</button>
            </div>
        )
    }
}

class StateChanging extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick() {
        // must bind this method to ur class inorder to use setState
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    render() {
        return (
            <div className="counter">
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>change!</button>
            </div>

        )
    }
}

class ReactLife extends Component {

    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })

        }, 2000);
    }

    render() {
        return (
            <div>
                <Conditional isLoading={this.state.isLoading} />
            </div>
        )

    }
}

// conditonal rendering 
class Conditional extends Component {

    render() {

        return (
            <div>
                {this.props.isLoading ? <h1>Loading...........</h1> : <h1>Some cool stuff about conditional rendering </h1>}
            </div>

        )



    }
}

class ReactForms extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            color: "blue"

        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const { name, value, type, checked } = event.target
        if (type === "checkbox") {
            this.setState({ [name]: checked })
        }
        else {
            this.setState({
                [name]: value
            })

        }


    }
    handleSubmit() {
        console.log("hello")
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="first Name" value={this.state.firstName} name="firstName" onChange={this.handleChange} />
                <br /><input type="text" placeholder="last  Name" value={this.state.lastName} name="lastName" onChange={this.handleChange} />

                <br />
                <br />
                <textarea name="mytext" onChange={this.handleChange} />
                <br />
                <input type="checkbox" checked={this.state.isFriendly} name="isFriendly" onChange={this.handleChange} /> is isFriendly?

                <br />

                <input type="radio" checked={this.state.gender === "male"} name="gender" onChange={this.handleChange} value="male" /> male


                <br />
                <input type="radio" checked={this.state.gender === "female"} name="gender" onChange={this.handleChange} value="female" /> female
                <br />color
                <select name="color" value={this.state.color} onChange={this.handleChange}>
                    <option value="blue" >blue</option>
                    <option value="red">red</option>
                    <option value="green">green</option>
                </select>
                <h1>{this.state.firstName}  {this.state.lastName}</h1>
                <h1>You are {this.state.gender}</h1>
                <h1>color is {this.state.color}</h1>
                <button >submit</button>
            </form>
        )


    }
}
export default App