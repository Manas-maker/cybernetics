import Image from "next/image";
import React, { useRef } from "react";
import logo from '../public/syntaxia.png'

const NewForm = ()=> {
    const page1 = useRef(null)
    const page2 = useRef(null)
    const page3 = useRef(null)
    const clickHandler = (e)=>{
        console.log(e.target.id);
        e.preventDefault();
       if (e.target.id=="firstButton"){
            page1.current.style.display="none";
            page2.current.style.display="block";
        }
    }
    return (<main id="syntaxiaMain">
        <Image src={logo} className='syntLogo' alt=""/>
        <h1 id="form-head">REGISTRATION</h1>
        <form>
        <section className="form-page" id="pageOne" ref={page1}>
            <fieldset id="informationFields">
                <div>
                <label htmlFor="nameField">Name: </label>
                <input type="text" name="partName" id="nameField" required/>
                </div>
                <div>
                <label htmlFor="phoneField">Phone: </label>
                <input type="text" name="partPhone" id="phoneField" required/>
                </div>
                <div>
                <label htmlFor="mailField">E-Mail: </label>
                <input type="text" name="partMail" id="mailField" required/>
                </div>
                <div>
                <label htmlFor="collegeField">College: </label>
                <input type="text" name="partCollege" id="collegeField" required/>
                </div>
            </fieldset>
            <fieldset>
                <h3>EVENTS</h3>
                <div className="event-placeholder">Event</div>
                <div className="event-placeholder">Event</div>
                <div className="event-placeholder">Event</div>
                <div className="event-placeholder">Event</div>
                <div className="event-placeholder">Event</div>
                <div className="event-placeholder">Event</div>
                <div className="event-placeholder">Event</div>
                <div className="event-placeholder">Event</div>
            </fieldset>
            <button className="pageButton" id="firstButton" onClick={clickHandler}>NEXT</button>
        </section>
        <section className="form-page" id="pageTwo" ref={page2}></section>
        <section className="form-page" id="pageTwo" ref={page3}></section>
        </form>
    </main>)
}

export default NewForm