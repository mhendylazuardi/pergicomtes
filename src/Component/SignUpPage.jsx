import React, {Component} from 'react'
import './Style/SignUpPage.css'
import LogoImage from "./Image/logo.png";
class SignUpPage extends Component{

    constructor(props){
        super(props)
        this.state={
            mobile: true,
            heightLong: false
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this))
        this.resize()
    }

    resize= () => {
        if(window.innerWidth <= 720){
            this.setState({mobile: true})
        }else{
            this.setState({mobile: false})
        }
    }

    render() {
        return(
            <div className="signUp">
                <nav className='navbar'>
                    <a className="navbar-brand" href="/">
                        <img src={LogoImage} alt="Logo"/>
                    </a>
                </nav>
                <div className={this.state.mobile ? "container-fluid" : "d-none"}>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-primary">Sekali Jalan</button>
                                <button type="button" className="btn btn-warning">Pulang Pergi</button>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Dari"/>
                                    <input type="text" className="form-control" placeholder="Dari"/>
                                </div>
                            </form>
                        </div>
                        <div className="col-6">
                            <div className="card">
                                <div className="card-body">
                                    <span>Tanggal</span>
                                    <p>23 Januari 2018</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">
                                <div className="card-body">
                                    <span>Tanggal</span>
                                    <p>23 Januari 2018</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 btn-search-ticket">
                            <a href="/ticket"><button type="button" className="btn btn-warning">Cari Tiket Pesawat</button></a>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="row text-center">
                        <div className="col-4">
                            <a href="#">
                                <i className="fas fa-plane"/><br/>
                                <p>Pesawat</p>
                            </a>
                        </div>
                        <div className="col-4">
                            <a href="#">
                                <i className="fas fa-users"/><br/>
                                <p>Login</p>
                            </a>
                        </div>
                        <div className="col-4">
                            <a href="#">
                                <i className="fas fa-ellipsis-v"/><br/>
                                <p>Menu</p>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default SignUpPage
