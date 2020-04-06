import React from "react"

class Forms extends React.Component {

  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      kampala: false,
      kayunga: false,
      masaka: false,
      direction: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const { checked, name, value, type } = event.target
    type === "checkbox" ?
      this.setState({
        [name]: checked
      }) :
      this.setState({
        [name]: value
      })

  }

  render() {
    return (
      <main>
        <form>
          <input type="text"
            placeholder="first Name"
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
          /><br /><br />

          <input type="text"
            placeholder="last Name"
            name="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
          /><br /><br />

          <input type="number"
            placeholder=" age"
            name="age"
            onChange={this.handleChange}
            value={this.state.age}
          /><br /><br /><br />
          <h2>Your gender</h2>
          <input type="radio"
            checked={this.state.gender === "male"}
            name="gender"
            onChange={this.handleChange}
            value="male"
          /> male
                      <br /><br /><br />

          <input type="radio"
            checked={this.state.gender === "female"}
            name="gender"
            onChange={this.handleChange}
            value="female"
          /> female

                     <br /><br />
          <h2>Your location</h2>
          <input type="checkbox"
            checked={this.state.kampala}
            name="kampala"
            onChange={this.handleChange} />  kampala
                     <br />
          <input type="checkbox"
            checked={this.state.kayunga}
            name="kayunga"
            onChange={this.handleChange} />  kayunga
                     <br />
          <input type="checkbox"
            checked={this.state.masaka}
            name="masaka"
            onChange={this.handleChange} />  masaka
                     <br />
          <h2>Your are direction</h2>
          <select name="direction"
            value={this.state.destination}
            onChange={this.handleChange}>
            <option value="" >select direction</option>
            <option value="north" >north</option>
            <option value="south">south</option>
            <option value="west">west</option>
            <option value="east">east</option>
          </select>
          <hr></hr>
          <h1>Entered Information:</h1>
          <p>Your name: {this.state.lastName} {this.state.firstName}</p>
          <p>Your age: {this.state.age}</p>
          <p>gender: {this.state.gender}</p>
          <p>direction: {this.state.direction}</p>
          <p>location: kampala: {this.state.kampala ? "YES" : "NO"} kayunga:{this.state.kayunga ? "YES" : "NO"} masaka:{this.state.masaka ? "YES" : "NO"}</p>
        </form>
      </main>
    )
  }
}
export default Forms