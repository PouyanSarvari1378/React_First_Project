import React from 'react'
import { Boxes } from './Boxes'
import { Toggles } from './Toggles'
import styles from './ToggleBoxesContainer.module.css'

export default class ToggleBoxesContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            boxes: [],
            showingBoxes: [1]
        }
    }
    checkedHandler = (id) => {
        const arrayCopy = [...this.state.showingBoxes]
        const index = arrayCopy.indexOf(id)
        if(index !== -1){
            arrayCopy.splice(index, 1)
            this.setState({showingBoxes: arrayCopy})
        }else{
            arrayCopy.push(id)
            this.setState({showingBoxes: arrayCopy})
        }
    }

    render(){
        const boxes = this.state.boxes.map(box => {
            if(this.state.showingBoxes.includes(box.id)){
                return box   
            }
        })
        return <div>
            {
                
                this.state.boxes ? 
                <div className={styles.container}>
                    <Toggles checkedHandler={this.checkedHandler} showingBoxes={this.state.showingBoxes} boxes={this.state.boxes} />
                    <Boxes boxes={boxes} />
                </div> 
                : <h3>Loading ...</h3>
            }
        </div>
    }

    componentDidMount(){
        this.setState({
            boxes: [
                {id: 1, title: 'box 1'},
                {id: 2, title: 'box 2'},
                {id: 3, title: 'box 3'},
                {id: 4, title: 'box 4'},
            ]
        })
    }
}