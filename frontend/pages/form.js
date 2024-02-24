import Nav from '@/pages/components/navbar'
import Foot from '@/pages/components/footer'
import { redirect } from 'next/dist/server/api-utils'
import React, { useRef } from "react";


const Form = () => {
    const formRef = useRef(null);
    const radioRef1 = useRef(null);
    const radioRef2 = useRef(null);
    const radioRef3 = useRef(null);
    const radioRef4 = useRef(null);
    const check = useRef(null);
    async function onSubmit(event) {
        event.preventDefault()
        if ((radioRef1.current.checked==false)&&(radioRef2.current.checked==false)&&(radioRef3.current.checked==false)&&(radioRef4.current.checked==false)) {
            alert("Please select atleast one event!");
        } else {
            const body = Object.fromEntries(new FormData(check.current).entries())
            const formData = JSON.stringify(Object.fromEntries(new FormData(check.current).entries()))
            const copy = {...formData};
            const response = await fetch('/api/record', {
              method: 'POST',
              body: formData,
            })
            formRef.current.innerHTML = "<section id='container'><style>@import url('https://fonts.googleapis.com/css2?family=Teko:wght@700&display=swap');section{width: fit-content; height: 100vh; padding: 1rem;background-color: rgb(7, 116, 110);}section{display: flex; flex-direction: column; justify-content: center; align-items: center;}h1{text-align: center;font-family: 'Teko'; font-size: 500%; color: rgb(252, 192, 24);}h2,h3{color: white;} </style><body><section><h1>REGISTRATION SUCCESSFUL!</h1><h2>FOLLOW US ON INSTAGRAM AT <a href='https://instagram.com/cybernetics.sju?igshid=MWdodzk5aG1oYTY4bA=='>@cybernetics.sju</a> FOR MORE UPDATES</h2><h2>CLICK <a href='https://chat.whatsapp.com/JAvlBFrmdu805xkm0w9NPw'>HERE</a> TO JOIN THE WHATSAPP GROUP</h2><h3>ALSO JOIN YOUR RESPECTIVE EVENT GROUPS</h3>"+((body.tf=='on')?"<h3><a href='https://chat.whatsapp.com/KxbZyyLSwLx70Ve7QUsPKq'>TECH FEUD</a></h3>":"")+
            ((body.sens=='on')?"<h3><a href='https://chat.whatsapp.com/L4Ks6TpyyJ094P7DmU4Ifd'>SENSORY</a></h3>":"")+
            ((body.etm=='on')?"<h3><a href='https://chat.whatsapp.com/KgG2otnrp1b1HQ5DPYnOEi'>ESCAPE THE MAINFRAME</a></h3>":"")+
            ((body.ww=='on')?"<h3><a href='https://chat.whatsapp.com/JdE9aia6Phg7XS168mSiF0'>WEEB WARS</a></h3>":"")+"</section></body></section>"
        }
    }
    function handleClick (e) {
        if(e.target.name=='sens'){
            alert('Registrations are closed for this event!');
            radioRef1.current.checked=false;
        } else if(e.target.name=='tf'&&(radioRef1.current.checked==true)){
            alert('Timings Are Clashing!');
             radioRef1.current.checked=false;
        }
        if(e.target.name=='etm'){
            alert('Registrations are closed for this event!');
            radioRef3.current.checked=false;
        } else if(e.target.name=='ww'&&radioRef3.current.checked==true){
            alert('Timings Are Clashing!');
            radioRef3.current.checked=false;
        }
    }
    return (<div ref={formRef}>
        <form ref={check} id='multiplexerReg' onSubmit={onSubmit/*action='/api/record' method='POST'*/} >
            <h1 id='formHead'>MULTIPLEXER REGISTRATION FORM</h1>
            <label htmlFor='teamName' id='tNlabel'>TeamName</label>
            <input type='text' id='teamName' name='teamName' required/>
            <div id="teamMembers">
            <fieldset className='memberSet'>
            <h3>Team Member 1</h3>
            <label htmlFor="Name1">Name:</label>
            <input type='text' name='Name1' id='Name1' required/>
            <br/><br/>
            <label htmlFor="regno1">Register Number:</label>
            <input type='text' name='regno1' id='regno1' required/>
            <br/><br/>
            <label htmlFor="phno1">Contact No:</label>
            <input type='text' name='phno1' id='phno1' required/>
            <br/><br/>
            <label htmlFor='shift1'>Shift: </label>
            <select name='shift1' id='shift1' required>
                <option value='First'>1</option>
                <option value='Second'>2</option>
                <option value='Third'>3</option>
            </select>
            </fieldset>
            <fieldset className='memberSet'>
            <h3>Team Member 2</h3>
            <label htmlFor="Name2" >Name:</label>
            <input type='text' name='Name2' id='Name2' required/>
            <br/><br/>
            <label htmlFor="regno2">Register Number:</label>
            <input type='text' name='regno2' id='regno2' required/>
            <br/><br/>
            <label htmlFor="phno2">Contact No:</label>
            <input type='text' name='phno2' id='phno2' required/><br/><br/>
            <label htmlFor='shift2'>Shift: </label>
            <select name='shift2' id='shift2' required>
                <option value='First'>1</option>
                <option value='Second'>2</option>
                <option value='Third'>3</option>
            </select>
            </fieldset>
            </div>
            <br/>
            <fieldset id='eventSet'>
            <legend id='eventLegend'>Events:</legend>
            <input type='checkbox' id='sens' name='sens' className="check" ref={radioRef1} onClick={handleClick}></input>
            <label htmlFor='sens' className='checkLabel'>Sensory <br/>11:00 AM-1:00 PM</label>
            <input type='checkbox' id='tf' name='tf' className="check" ref={radioRef2} onClick={handleClick}></input>
            <label htmlFor='tf' className='checkLabel'>Tech Feud<br/> 11:00 AM - 1:00 PM</label>
            <input type='checkbox' name='etm' id='etm' className="check" ref={radioRef3} onClick={handleClick}></input>
            <label htmlFor='etm' className='checkLabel'>Escape The Mainframe<br/>2:00 PM-4:00 PM</label>
            <input type='checkbox' name='ww' id='ww' className="check" ref={radioRef4} onClick={handleClick}></input>
            <label htmlFor='ww' className='checkLabel'>Weeb Wars<br/>2:00 PM - 4:00 PM</label>
            </fieldset>
            <div><input id='submitButt' type='submit'/></div>
        </form>
    </div>)
}

export default Form