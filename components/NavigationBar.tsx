import {Component}from 'react'
import {MenuData} from './NavigationBarData'
import './NavigationBar.css'

class NavigationBar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className='logo'>Nimsara Paramulla</h1>
                <ul className='MenuData'>
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
