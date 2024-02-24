import logo from '../public/syntaxia.png'
import {Helmet} from 'react-helmet'
import Image from 'next/image'
import React from 'react'
import HomeCarousel from '@/pages/components/HomeCarousel'
import Curve from './components/Layout/Curve'

/*const slides = [
  {
    key: 1,
    content: <img src="https://picsum.photos/800/800/?random" alt="1" />
  },
  {
    key: 2,
    content: <img src="https://picsum.photos/800/800/?random" alt="2" />
  },
  {
    key: 3,
    content: <img src="https://picsum.photos/600/800/?random" alt="3" />
  },
  {
    key: 4,
    content: <img src="https://picsum.photos/800/500/?random" alt="4" />
  },
  {
    key: 5,
    content: <img src="https://picsum.photos/800/800/?random" alt="5" />
  },
  {
    key: 6,
    content: <img src="https://picsum.photos/500/800/?random" alt="6" />
  },
  {
    key: 7,
    content: <img src="https://picsum.photos/800/600/?random" alt="7" />
  },
  {
    key: 7,
    content: <img src="https://picsum.photos/800/800/?random" alt="8" />
  }
];*/

const Syntaxia = ()=> {
    const isCarousel = React.useRef(null)
    return (
      <div className='syntaxiaForce'>
      <Curve backgroundColor={"#3bafc0"}>
        <div id="syntaxia-landing">
                    <Helmet>
                    <script src='https://unpkg.co/gsap@3/dist/gsap.min.js'  type='text/javascript' defer></script>
                    <script src='https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js' defer></script>
                    </Helmet>
            <Image src={logo} className='syntLogo' alt=""/>
            <HomeCarousel/>
        </div>
      </Curve>
      </div>
    )
}

export default Syntaxia