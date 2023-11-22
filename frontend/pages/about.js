import Link from 'next/link'
import client from './client'
import imageUrlBuilder from '@sanity/image-url'
import Nav from '@/pages/components/navbar'
import Foot from '@/pages/components/footer'
import Placeholder from '../public/placeholder.png'
import character from '../public/fotor-ai-20231029124637-removebg-preview.png'
import Manas from '../public/MANAS.png'
import {Helmet} from 'react-helmet'
import Image from 'next/image'
import marissa from '../public/portraits/marissa.jpg'
import nikhil from '../public/portraits/nikhil.jpg'
import jestina from '../public/portraits/jestina.jpg'
import aryan from '../public/portraits/aryan.jpg'
import harshita from '../public/portraits/harshita.jpg'
import astle from '../public/portraits/astle.jpg'
import shubhan from '../public/portraits/shubhan.jpg'
import ananya from '../public/portraits/ananya.jpg'
import divyansh from '../public/portraits/divyansh.jpg'
import farhaan from '../public/portraits/farhaan.jpg'
import manas from '../public/portraits/manas.jpg'
import miriam from '../public/portraits/miriam.jpg'
import rida from '../public/portraits/rida.jpg'
import sanjay from '../public/portraits/sanjay.jpg'
import shayari from '../public/portraits/shayari.jpg'
import srish from '../public/portraits/srish.jpg'
import suhas from '../public/portraits/suhas.jpg'
import tanusha from '../public/portraits/tanusha.jpg'
import winston from '../public/portraits/winston.jpg'
const About = ()=> {
    return (
        <div className='aboutPage'>
            <Helmet>
                <script src='about_scripts.js' type='text/javascript' defer></script>
            </Helmet>
        <Nav/>
        <div className='cont'>
        <div className="card oneone">
        <div className="popimage">
            <Image src={nikhil} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div>  
        <div className="card onetwo">
        <div className="popimage">
            <Image src={jestina} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div>  
        <div className="card onethree">
        <div className="popimage">
            <Image src={aryan} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div>  
        <div className="card twoone">
        <div className="popimage">
            <Image src={harshita} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div>  
        <div className="card twotwo">
        <div className="popimage">
            <Image src={astle} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div>  
        <div className="card threeone">
        <div className="popimage">
            <Image src={rida} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div>  
        <div className="card threetwo">
        <div className="popimage">
            <Image src={winston} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div>  
        <div className="card threethree">
        <div className="popimage">
            <Image src={shubhan} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div>   
        <div className="card threethree">
        <div className="popimage">
            <Image src={miriam} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div>   
        <div className="card threethree">
        <div className="popimage">
            <Image src={farhaan} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div>   
        <div className="card threethree">
        <div className="popimage">
            <Image src={ananya} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div> 
        <div className="card threethree">
        <div className="popimage">
            <Image src={sanjay} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div> 
        <div className="card threethree">
        <div className="popimage">
            <Image src={divyansh} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div> 
        <div className="card threethree">
        <div className="popimage">
            <Image src={suhas} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div> 
        <div className="card threethree">
        <div className="popimage">
            <Image src={marissa} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div> 
        <div className="card threethree">
        <div className="popimage">
            <Image src={tanusha} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div> 
        <div className="card threethree">
        <div className="popimage">
            <Image src={shayari} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div> 
        <div className="card threethree">
        <div className="popimage">
            <Image src={manas} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div> 
        <div className="card threethree">
        <div className="popimage">
            <Image src={srish} alt="" className="cover-image"/>
        </div>
        <Image src={Manas} className="title"/>
        <Image  src={character} className="core"/>
        </div> 
        </div>
        <section className='about'>
        <div className="logos">
            <div className="logo hidden">
                <Image src={Placeholder}/>
            </div>
            <div className="logo hidden">
                <Image src={Placeholder}/>
            </div>
            <div className="logo hidden">
                <Image src={Placeholder}/>
            </div>
        </div>
         </section>
        </div>
    )
}

export default About