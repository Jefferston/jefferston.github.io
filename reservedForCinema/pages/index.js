import Layout from './components/Layout';
  
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import "../static/styles/style.scss";

  const Index = (props) => (
    <Layout>
      <div className="film-container">

        {props.shows.map(show => (
          <div className="film-cell" key={show.id}>

            <img src={show.image.medium} alt=""/>

            <div>
              <h3>{show.name} <span>({show.premiered.slice(0, -6)})</span></h3>
              <p></p>
              <Link as={`/posts/${show.id}`} href={`/post?id=${show.id}`}>
                  <a>See more</a>
              </Link>
            </div>

          </div>
        ))}

      </div>
    </Layout>
  )
  

  Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    return {
      shows: data.map(entry => entry.show)
    }
  }
  
  export default Index