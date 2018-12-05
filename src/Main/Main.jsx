import React, {Component} from 'react'
import Routing from '../Routing/Routing'
import LogoImage from '../Component/Image/logo.png'
import './Main.css'

class Main extends Component{
    constructor(props){
        super(props)
        this.state={
            navBar: true,
            mobile: true
        }
        this.handleClick = this.handleClick.bind(this)

    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this))
        this.resize()
    }

    resize(){
        if (window.innerWidth <= 1024){
            this.setState({mobile: true})
        }
        else{
            this.setState({mobile: false})
        }
    }

    handleClick = () => {
        this.setState(state => ({
            navBar: ! state.navBar
        }))
    }

    render() {
        return(
            <div>
                <Routing/>
            </div>
        )
    }
}
export default Main
