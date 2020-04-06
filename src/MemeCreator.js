import React, { Component } from "react"

class MemeCreator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomTmg: "image.jpg",
            allMemeTmgs: []

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    //getting data from an api
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                //   console.log(memes[0])
                this.setState({
                    allMemeTmgs: memes
                })
            })

    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        const radNum = Math.floor(Math.random() * this.state.allMemeTmgs.length)
        const randMemeImg = this.state.allMemeTmgs[radNum].url
        this.setState({
            randomTmg: randMemeImg
        })

    }
    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input type="text"
                        name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                        placeholder="Top text"
                    />
                    <input type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                        placeholder="bottom text"
                    />
                    <button>more</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomTmg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom" >{this.state.bottomText}</h2>
                </div>
            </div>

        )
    }


}

export default MemeCreator