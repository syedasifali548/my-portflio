import React from 'react'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import asif from '../assets/asif.jpg'
import resume from '../assets/resume.pdf'
import linkedIn from '../assets/icons/linkedIn.svg'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={asif} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Syed <span>Asif Ali</span> </div>
            <div className="sidebar__item sidebar__title">MERN Stack Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-3">
                <a href=" https://www.facebook.com/profile.php?id=100007716725680"><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href="https://www.instagram.com/syedasif_alishah/"><img src={instagram} alt="instagram" className="sidebar__icon" /></a>
                <a href="https://www.linkedin.com/in/syed-asif-ali-b8a9a7190/"><img src={linkedIn} alt="linkedln" className="linkedln__icon" /></a>
                <a href="https://github.com/syedasifali548"><img src={github} alt="linkedln" className="linkedln__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Karachi,Pakitsan</div>
                <div className="sidebar__item">syedasifali548@gmail.com</div>
                <div className="sidebar__item">+923012271372</div>
            </div>
            <div className="sidebar__item sidebar__email" >email me</div>
            <div className="rights"><span> @2021 <br/>Made by syedasifali548@gmail.com </span></div>
        </div>
    )
}

export default Sidebar
