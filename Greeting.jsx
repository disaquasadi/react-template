import React from 'react'


export default class Greeting extends React.Component{
    constructor(){
        super()
        this.state={name:'', count: 0}
    }
    handleChange(e){
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }
    handleSave(c){
        c = c + 1
        this.setState({count: c})
    }


    render(){
        return(
            <div>
                <table>
                    <tr>
                        <td>
                            Name:
                        </td>
                        <td>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
                        </td>
                    </tr>
                    <tr>
                        <td><button name="button" onClick={()=>this.handleSave(this.state.count)}>Greet</button></td>
                    </tr>
                </table>
                <div>{this.state.name}</div>
                <div>{this.state.count}</div>
            </div>
        )
    }
}
