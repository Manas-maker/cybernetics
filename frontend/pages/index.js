import Link from 'next/link'
import groq from 'groq'
import client from '../pages/client'
import imageUrlBuilder from '@sanity/image-url'
import Nav from '@/pages/components/navbar'
import Foot from '@/pages/components/footer'
import {Helmet} from 'react-helmet'
import Image from 'next/image'
import VanillaTilt from 'vanilla-tilt'
function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}
const Index = ({posts}) => {
  return (
    <div>
      <Helmet>
        <script src='/hacker_script.js'  type='text/javascript' defer></script>
      </Helmet>
      <section id="Hero">
        <h1 id="heroText">CYBERNETICS</h1>
      </section>
      <Nav/>
      <div id='blob'></div>
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
          
      )}</div>
      <Foot/>
    </div>
  )
}

export async function getStaticProps() {
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

export default Index

/*setTimeout(()=>{
  comp = document.getElementById('comp')
  comp.style.display='flex';
  here1 = document.getElementById('here1')
  here1.addEventListener ('click',lbpage)
}, 4000)*/