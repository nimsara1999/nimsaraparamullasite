import {Component}from 'react'
import {MenuData} from './NavigationBarData'
import './NavigationBar.css'

class NavigationBar extends Component{
    state={clicked:false};
    handleClick = ()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className='logo'>Nimsara Paramulla</h1>

                <div className='menuIcons' 
                onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "MenuData active" :"MenuData" }>
                    {MenuData.map((item,index)=>{
                        return(
                            <li key={index}><a href={item.url} className={item.cName}><i className={item.icon}></i> {item.title}</a></li>
                        );
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavigationBar
