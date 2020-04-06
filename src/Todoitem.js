import React from "react"

class Todoitem extends React.Component {
    render() {

        return (
            <div className="todo">
                <input type="checkbox" checked={this.props.item.completed} onChange={() => this.props.handleChange(this.props.item.id)} />
                <p>{this.props.item.text}</p>
            </div>
        )
    }


}

export default Todoitem