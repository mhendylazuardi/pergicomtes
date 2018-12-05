import React, {Component} from 'react'
import './Style/SignUpPage.css'

class TicketDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mobile: true,
            data:null
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this))
        this.resize()

        console.log(this.props.location.search)

    }

    resize = () => {
        if (window.innerWidth <= 720) {
            this.setState({mobile: true})
        } else {
            this.setState({mobile: false})
        }
    }

    render(){
        return (
            <div>

            </div>
        );
    }
}
export default TicketDetail
