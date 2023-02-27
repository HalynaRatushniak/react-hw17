import React, {Component} from 'react';
import './Contacts.css'
import unknowIcon from '../assets/image/anonymous.jpg'
import maleIcon from '../assets/image/male.jpg'
import femaleIcon from '../assets/image/female.jpg'
import contactIcon from '../assets/image/contacts.jpg'

function Contact(item) {

    const contact = item;
    const genderIcon = {
        male: maleIcon,
        female: femaleIcon,
        unknown: unknowIcon,
    }
    return (
        <div>
            <div className="contact__item">
                <img className='contact__icon' src={contactIcon} alt="contacts-icon"/>
                <div className="contact__body">
                    <div className="contact__name">{contact.item.firstName} {contact.item.lastName} </div>
                    <div className="contact__phone"> {contact.item.phone}</div>
                </div>
                <div className="contact__gender">
                    <img className='gender__icon' src={genderIcon[`${contact.item.gender}`]} alt=""/>
                </div>
            </div>
        </div>
    );

}

export default Contact;