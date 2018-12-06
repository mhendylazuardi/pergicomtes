import React, {Component} from 'react'
import './Style/TicketDetail.css'
import LogoCitilink from './Image/citilink.png'

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
                        <a href="/ticket"><i className="fas fa-arrow-left"/></a>
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
                                        <p style={{fontSize : 10}}>Tiba</p><br/>
                                        <span style={{color : "#4834d4", fontWeight: "bold"}}>DPS</span><br/>
                                        <p><small style={{fontSize: 8}}>Jakarta</small></p><br/>
                                        <p><small style={{fontSize: 8, color: "#dfe6e9"}}>Soekarno Hatta</small></p><br/>
                                        <p style={{fontSize : 10}}>00:30</p><br/>
                                        <p style={{fontSize : 10}}>Jumat, 10 Jan 2018</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card" style={{marginTop: "5px"}}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-8">
                                        <img src={LogoCitilink} style={{width: 50, marginTop: 10}}/>
                                    </div>
                                    <div className="col-4">
                                        <p><small style={{fontWeight: "bold", color:"#4834d4"}}>Citilink</small></p><br/>
                                        <p><small>Ekonomi</small></p>
                                    </div>
                                    <div className="col-12"><hr/></div>
                                    <div className="col-7">
                                        <p><small style={{color: "#dfe6e9", marginBottom: 10}}>Penumpang</small></p><br/>
                                        <p><small style={{color: "#dfe6e9"}}>Termasuk</small></p>
                                    </div>
                                    <div className="col-5">
                                        <p><small style={{color: "#4834d4", marginLeft: 18}}>1 Dewasa</small></p><br/>
                                        <p><small style={{color: "#3a3a3a"}}><i className="fas fa-plane" style={{color: "#fdcb6e"}}/>  Pajak Bandara</small></p><br/>
                                        <p><small style={{color: "#3a3a3a"}}><i className="fas fa-suitcase" style={{color: "#fdcb6e"}}/>  20 Kg Bagasi</small></p><br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-ticket-detail">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6" style={{marginBottom: 20}}>
                                <p>Total</p>
                            </div>
                            <div className="col-6 float-right">
                                <span style={{color: "#4834d4", fontWeight: "bold"}}>Rp. 1.000.000</span>
                            </div>
                            <div className="col-12 text-center" style={{marginBottom: 20}}>
                                <button className="btn btn-warning" style={{width: "90%"}}>Pesan Sekarang</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default TicketDetail
