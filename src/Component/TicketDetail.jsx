import React, {Component} from 'react'
import './Style/TicketDetail.css'

class TicketDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mobile: true,
            data:[]
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this))
        this.resize()
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
            <div className="ticket-detail">
                <nav className={this.state.mobile ? "navbar fixed-top":"d-none"} style={{position: "fixed", width: "100%"}}>
                    <a className="navbar-brand" href="/">
                        <a href="/"><i className="fas fa-arrow-left"/></a>
                        <span>Detail Tiket</span><br/>
                    </a>
                </nav>
                <div className={this.state.mobile ? "row" : "d-none"} style={{marginTop: "56px", height: "35px;"}}>
                    <div className="col-12 title-ticket">
                        <span>Tiket Pergi</span>
                    </div>
                    <div className="col-12">
                        <div className="card" style={{marginTop: "10px"}}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-5">
                                        <p style={{fontSize : 10}}>Berangkat</p><br/>
                                        <span style={{color : "#4834d4", fontWeight: "bold"}}>CGK</span><br/>
                                        <p><small style={{fontSize: 8}}>Jakarta</small></p><br/>
                                        <p><small style={{fontSize: 8, color: "#dfe6e9"}}>Soekarno Hatta</small></p><br/>
                                        <p style={{fontSize : 10}}>20:30</p><br/>
                                        <p style={{fontSize : 10}}>Jumat, 30 Nov 2018</p>
                                    </div>
                                    <div className="col-2">
                                        <i className="fas fa-plane" style={{marginTop: 40, color: "#fdcb6e"}}/>
                                    </div>
                                    <div className="col-5">
                                        <p style={{fontSize : 10}}>Berangkat</p><br/>
                                        <span style={{color : "#4834d4", fontWeight: "bold"}}>CGK</span><br/>
                                        <p><small style={{fontSize: 8}}>Jakarta</small></p><br/>
                                        <p><small style={{fontSize: 8, color: "#dfe6e9"}}>Soekarno Hatta</small></p><br/>
                                        <p style={{fontSize : 10}}>20:30</p><br/>
                                        <p style={{fontSize : 10}}>Jumat, 30 Nov 2018</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default TicketDetail
