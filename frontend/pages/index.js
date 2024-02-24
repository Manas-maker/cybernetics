import Link from 'next/link'
import groq from 'groq'
//import client from './client'
import imageUrlBuilder from '@sanity/image-url'
import Nav from '@/pages/components/navbar'
import Foot from '@/pages/components/footer'
import {Helmet} from 'react-helmet'
import {createClient} from '@sanity/client'
import Curve from '@/pages/components/Layout/Curve'
import Image from 'next/image'
import one from '../public/homepage_photos/1.png'
import two from '../public/homepage_photos/2.png'
import three from '../public/homepage_photos/3.png'
import four from '../public/homepage_photos/4.png'
import five from '../public/homepage_photos/5.png'
import six from '../public/homepage_photos/6.png'
import seven from '../public/homepage_photos/7.png'
import eight from '../public/homepage_photos/8.png'
import butt from '../public/syntaxia_butt.png'
export const client = createClient({
  projectId: '686g7f55', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2023-05-03',
})

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}
const Index = ({posts}) => {
  return (
    <Curve>
      <Helmet>
        <script src='/hacker_script.js'  type='text/javascript' defer></script>
      </Helmet>
      <div className='tickerContainer'>
      <div className='divider' style={{marginTop: 6+'rem'}}><div className='plus'>+</div><div className='line'></div><div className='plus'>+</div></div>
      <div className='tickerTape'><div className='ticker'>
        <div>Sign up for SYNTAXIA 2024! // Win exciting cash prizes // Powered by brand_name, Brand_name</div>
        <div>Sign up for SYNTAXIA 2024! // Win exciting cash prizes // Powered by brand_name, Brand_name</div>
        <div>Sign up for SYNTAXIA 2024! // Win exciting cash prizes // Powered by brand_name, Brand_name</div>
      </div>
      </div>
      <div className='divider'><div className='plus'>+</div><div className='line'></div><div className='plus'>+</div></div>
      </div>
      <div id='hero_total'>
      <section id="Hero">
        <h2 id='welcome'>welcome to</h2>
        <h1 id="heroText"><span className='heroLetter'>C</span><span className='heroLetter'>Y</span><span className='heroLetter'>B</span><span className='heroLetter'>E</span><span className='heroLetter'>R</span><span className='heroLetter'>N</span><span className='heroLetter'>E</span><span className='heroLetter'>T</span><span className='heroLetter'>I</span><span className='heroLetter'>C</span><span className='heroLetter'>S</span></h1>
        <button id='syntaxiaButt'><Link href='./syntaxia'><Image src={butt} width={180} alt='Syntaxia Link'/></Link></button>
      </section>
      <section id="heroImages"><Image src={one} width={650} priority alt=''/><Image src={two} width={650} alt=''/><Image src={three} width={650} alt=''/><Image src={four} width={650} alt=''/><Image src={five} width={650} alt=''/><Image src={six} width={650} alt=''/><Image src={seven} width={650} alt=''/><Image src={eight} width={650} alt=''/></section>
      </div>
      <Nav/>
      {/*<div id='blob'></div>
      <div className='postList'>{posts.length > 0 && posts.map(
        ({ _id, title = '', slug = '', publishedAt = '' , mainImage, _updatedAt}) =>
          slug && (
            <li key={_id} className='postItem'data-tilt data-tilt-reverse="true" data-tilt-scale="1.1">
              <Link href={`/post/$z{encodeURIComponent(slug.current)}`}>
                {title}
              </Link>{' '}<img
            src={mainImage && urlFor(mainImage).width(500)
            .url()}
          />
              ({new Date(_updatedAt).toDateString()})
            </li>
          )
          
            )}</div>*/}
      <Foot/>
    </Curve>
  )
}

/*export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && _createdAt < now()] | order(_updatedAt desc)
  `)
  console.log(posts)
  return {
    props: {
      posts
    }
  }
}
*/
export default Index

/*setTimeout(()=>{
  comp = document.getElementById('comp')
  comp.style.display='flex';
  here1 = document.getElementById('here1')
  here1.addEventListener ('click',lbpage)
}, 4000)*/