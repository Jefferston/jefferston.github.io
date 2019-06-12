import Layout from './components/Layout';

import "../static/styles/style.scss";

import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>
    <div className="film-content">
      <h1>{props.show.name}</h1>

      <div className="film-content-info">
        <img src={props.show.image.medium}/>

        <div>
          <p>Rating: <span>{props.show.rating.average}</span></p>
          <p>Release date: <span>{props.show.premiered.slice(0, -6)}</span></p>
          {/* <p>Country: <span>{props.show.network.country.name}</span></p> */}
          <p>Genres: 
            <span>{props.show.genres.map(
              el => <Link as={`/genres/${el.toLowerCase()}`} href={`/category}`} key={el}>
                      <a className="special">{el}</a>
                    </Link>)}
            </span>
          </p>
        </div>

      </div>
      
      <p className="film-content-description">{props.show.summary.replace(/<[/]?p>/g, '')}</p>

    </div>
  </Layout>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post