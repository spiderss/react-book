import React, { Component } from 'react';
import './footer.css'

class Footer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div id="footer" className="footer">
                <p className="footer-content">
                    copyRights 个人网站 &copy; 2689592940@qq.Com
                </p>
            </div>
        )
    }

}
export default Footer;