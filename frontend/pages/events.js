import Image from 'next/image'
import React from 'react'
import logo from '../public/syntaxia.png'
import blue from '../public/events/blue_back.png'

const Events = ()=> {
    return(<div className="syntaxia-alt"> 
        <Image src={logo} height={100} className="syntLogo" alt=""/>
        <h1 id="event-head">EVENTS</h1>
        <h2 className="event-sub">TECHNICAL</h2>
        <div className="event-table">
            <figure className='event-card'>
                <Image src={blue} className='event-back' alt=""/>
                <figcaption><h2 className="event-name" >event name</h2><h3>tagline tagline tagline</h3></figcaption>
            </figure>
            <figure className='event-card'>
                <Image src={blue} className='event-back' alt=""/>
                <figcaption><h2 className="event-name" >event name</h2><h3>tagline tagline tagline</h3></figcaption>
            </figure>
            <figure className='event-card'>
                <Image src={blue} className='event-back' alt=""/>
                <figcaption><h2 className="event-name" >event name</h2><h3>tagline tagline tagline</h3></figcaption>
            </figure>
            <figure className='event-card'>
                <Image src={blue} className='event-back' alt=""/>
                <figcaption><h2 className="event-name" >event name</h2><h3>tagline tagline tagline</h3></figcaption>
            </figure>
        </div><br/><br/>
        <h2 className="event-sub">NON-TECHNICAL</h2>
        <div className="event-table">
            <figure className='event-card'>
                <Image src={blue} className='event-back' alt=""/>
                <figcaption><h2 className="event-name" >event name</h2><h3>tagline tagline tagline</h3></figcaption>
            </figure>
            <figure className='event-card'>
                <Image src={blue} className='event-back' alt=""/>
                <figcaption><h2 className="event-name" >event name</h2><h3>tagline tagline tagline</h3></figcaption>
            </figure>
            <figure className='event-card'>
                <Image src={blue} className='event-back' alt=""/>
                <figcaption><h2 className="event-name" >event name</h2><h3>tagline tagline tagline</h3></figcaption>
            </figure>
            <figure className='event-card'>
                <Image src={blue} className='event-back' alt=""/>
                <figcaption><h2 className="event-name" >event name</h2><h3>tagline tagline tagline</h3></figcaption>
            </figure>
        </div>
    </div>)
}

export default Events