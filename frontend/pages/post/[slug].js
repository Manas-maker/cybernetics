import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import {client} from '@/pages/index'
import Image from 'next/image'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value}) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <Image
          alt={value.alt || ''}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}
const Post = ({post}) => {
  const {
    title,
    name,
    categories,
    authorImage,
    mainImage,
    body=[]
  } = post
  return (
    <article>
      <h1>{title}</h1>
      <span>By {name}</span>
      {categories && (
        <ul>
          Posted in
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )}
      {authorImage && (
        <div>
          <Image
            src={urlFor(authorImage)
            .width(50)
            .url()}
            alt=""
          />
        </div>
      )}
      {mainImage && (
        <div>
          <Image
            src={urlFor(mainImage).width(50)
            .url()}
            alt=""
          />
        </div>
      )}
      <PortableText
        value={body}
        components={ptComponents}
      />
    </article>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  "mainImage": mainImage,
  body
}`
export async function getStaticPaths() {

  const paths = await client.fetch(
    groq`*[_type=="post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params:{slug}})),
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post