import {Component}from 'react'
import {MenuData} from './NavigationBarData'
import './NavigationBar.css'
import {Link} from "react-router-dom"

class NavigationBar extends Component{
    state={clicked:false};
    handleClick = ()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <div className='Navbar'>
                <nav className="NavbarItems">
                <h1 className='logo'>Nimsara Paramulla</h1>

                <div className='menuIcons' 
                onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "MenuData active" :"MenuData" }>
                    {MenuData.map((item,index)=>{
                        return(
                            <li key={index}>
                                <Link to={item.url} className={item.cName}><i className={item.icon}></i> {item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            </div>
        )
    }
}

export default NavigationBar
