import Link from 'next/link'
import {Suspense} from 'react'
import {client} from './index'
import imageUrlBuilder from '@sanity/image-url'
import Nav from '@/pages/components/navbar'
import Foot from '@/pages/components/footer'
import Placeholder from '../public/placeholder.png'
import character from '../public/fotor-ai-20231029124637-removebg-preview.png'
import Manas from '../public/MANAS.png'
import {Helmet} from 'react-helmet'
import Image from 'next/image'
import test from '../public/portraits/Group_106.png'
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
import marissapop from '../public/portraits/marissapop.png'
import nikhilpop from '../public/portraits/nikhilpop.png'
import jestinapop from '../public/portraits/jestinapop.png'
import aryanpop from '../public/portraits/aryanpop.png'
import harshitapop from '../public/portraits/harshitapop.png'
import astlepop from '../public/portraits/astlepop.png'
import ridapop from '../public/portraits/ridapop.png'
import winstonpop from '../public/portraits/winstonpop.png'
import shubhanpop from '../public/portraits/shubhanpop.png'
import miriampop from '../public/portraits/miriampop.png'
import farhaanpop from '../public/portraits/farhaanpop.png'
import ananyapop from '../public/portraits/ananyapop.png'
import sanjaypop from '../public/portraits/sanjaypop.png'
import suhaspop from '../public/portraits/suhaspop.png'
import divyanshpop from '../public/portraits/divyanshpop.png'
import tanushapop from '../public/portraits/tanushapop.png'
import shayaripop from '../public/portraits/shayaripop.png'
import manaspop from '../public/portraits/manaspop.png'
import srishpop from '../public/portraits/srishpop.png'

const About = ()=> {
    return (
        <div className='aboutPage'>
            <Helmet>
                <script src='about_scripts.js' type='text/javascript' defer></script>
            </Helmet>
            <Suspense fallback={<p>Loading feed...</p>}>
        <Nav/>
        <div className='cont'>
        <div className='row one'>
            <div className="card oneone">
            <div className="popimage">
                <Image width={364} src={test} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={nikhilpop} className="core"/>
            </div>  
            <div className="card onetwo">
            <div className="popimage">
                <Image width={364} src={jestina} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={jestinapop} className="core"/>
            </div>  
        </div>
        <div className='row two'>
            <div className="card twoone">
            <div className="popimage">
                <Image width={364} src={aryan} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={aryanpop} className="core"/>
            </div>  
            <div className="card twotwo">
            <div className="popimage">
                <Image width={364} src={harshita} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={harshitapop} className="core"/>
            </div>  
            <div className="card twothree">
            <div className="popimage">
                <Image width={364} src={astle} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={astlepop} className="core"/>
            </div>  
        </div>
        <div className='row three'>
            <div className="card threeone">
            <div className="popimage">
                <Image width={364} src={rida} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={ridapop} className="core"/>
            </div>  
            <div className="card threetwo">
            <div className="popimage">
                <Image width={364} src={winston} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={winstonpop} className="core"/>
            </div>  
            <div className="card threethree">
            <div className="popimage">
                <Image width={364} src={shubhan} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={shubhanpop} className="core"/>
            </div>   
        </div>
        <div className='row four'>
            <div className="card fourone">
            <div className="popimage">
                <Image width={364} src={miriam} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={miriampop} className="core"/>
            </div>   
            <div className="card fourtwo">
            <div className="popimage">
                <Image width={364} src={farhaan} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={farhaanpop} className="core"/>
            </div>   
            <div className="card fourthree">
            <div className="popimage">
                <Image width={364} src={ananya} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={ananyapop} className="core"/>
            </div> 
        </div>
        <div className='row five'>
            <div className="card fiveone">
            <div className="popimage">
                <Image width={364} src={sanjay} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={sanjaypop} className="core"/>
            </div> 
            <div className="card fivetwo">
            <div className="popimage">
                <Image width={364} src={divyansh} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={divyanshpop} className="core"/>
            </div> 
            <div className="card fivethree">
            <div className="popimage">
                <Image width={364} src={suhas} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={suhaspop} className="core"/>
            </div> 
        </div>
        <div className='row six'>
            <div className="card sixone">
            <div className="popimage">
                <Image width={364} src={marissa} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={marissapop} className="core"/>
            </div> 
            <div className="card sixtwo">
            <div className="popimage">
                <Image width={364} src={tanusha} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={tanushapop} className="core"/>
            </div> 
            <div className="card sixthree">
            <div className="popimage">
                <Image width={364} src={shayari} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={shayaripop} className="core"/>
            </div> 
        </div>
        <div className='row seven'>
            <div className="card sevenone">
            <div className="popimage">
                <Image width={364} src={manas} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={manaspop} className="core"/>
            </div> 
            <div className="card seventwo">
            <div className="popimage">
                <Image width={364} src={srish} alt="" className="cover-image"/>
            </div>
            <Image width={364} src={Manas} className="title"/>
            <Image width={364}  src={srishpop} className="core"/>
            </div>
        </div> 
        </div>
        <section className='about'>
        <div className="logos">
            <div className="logo hidden">
                <Image width={364} src={Placeholder}/>
            </div>
            <div className="logo hidden">
                <Image width={364} src={Placeholder}/>
            </div>
            <div className="logo hidden">
                <Image width={364} src={Placeholder}/>
            </div>
        </div>
         </section>
         </Suspense>
        </div>

    )
}

export default About