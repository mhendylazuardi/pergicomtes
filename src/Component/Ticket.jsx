import React, {Component} from 'react'
import './Style/Ticket.css'
import CitilinkIcon from "./Image/citilink.png";
class Ticket extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mobile: true,
            data:null
        }
        this.getData()
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this))
        this.resize()
    }

    getData = () => {
        let data = fetch("https://api.spacexdata.com/v3/launches")
            .then((resp) => {
                resp.json().then((res) => {
                    console.log(res)
                    this.setState({data:res})
                })
            })
    }

    resize = () => {
        if (window.innerWidth <= 720) {
            this.setState({mobile: true})
        } else {
            this.setState({mobile: false})
        }
    }
    render() {
        return(
            <div className="ticket-plane">
                <nav className={this.state.mobile ? "navbar fixed-top":"d-none"} style={{position: "fixed", width: "100%"}}>
                    <a className="navbar-brand" href="/">
                        <a href="/"><i className="fas fa-arrow-left"/></a>
                        <span>Jakarta-Bali</span><br/>
                        <p>Jumat, 30 November 2018(1 Dewasa)</p>
                    </a>
                </nav>
                <div className={this.state.mobile ? "container-fluid": "d-none"} style={{marginTop: "103px"}}>
                    {
                        this.state.data ? this.state.data.map((res)=>
                            <a href="/detailticket">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <div className="inline-ticket-title">
                                            <img src={CitilinkIcon} alt="citilink"/>
                                            <p>Citilink</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-5">
                                                <p>Nama Misi</p><br/>
                                                <span>{res.mission_name}</span>
                                            </div>
                                            <div className="col-2">
                                                <p>Year</p><br/>
                                                <p>{res.launch_year}</p>
                                            </div>
                                            <div className="col-5">
                                                <p>ID Roket</p><br/>
                                                <span>{res.rocket.rocket_id}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-6">
                                                <p>Waktu UTC</p><br/>
                                                <span>{res.launch_date_utc}</span>
                                            </div>
                                            <div className="col-6" style={{color: "#4834d4"}}>
                                                <p>Waktu Lokal</p><br/>
                                                <span>{res.launch_date_local}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ) : <h4>Wait data is fetching</h4>
                    }
                </div>
            </div>
        )
    }
}
export default Ticket
