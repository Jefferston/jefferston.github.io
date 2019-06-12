import Layout from './components/Layout';

import "../static/styles/style.scss";

import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Category = (props) => {
    
    try {
      let genre = window.location.pathname.slice(8, 26);
      let finalGenre = genre[0].toUpperCase() + genre.slice(1);

      let trueShows = props.shows.filter(show => show.genres.includes(finalGenre));
      console.log(trueShows)

      return (
        <div>
          <Layout>
            <div className="category">

              <div className="category-greet">
                <h2>{finalGenre}</h2>
              </div>

              <div className="film-container">
                {trueShows.map(show => (
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

            </div>
          </Layout>        
        </div>
      )
    }
    
    
    catch {
      return (
          <div>
            <Layout>
              <div className="category">
                <p>Waiting...</p>
              </div>
            </Layout>        
          </div>
        )
    }
    
  }

Category.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  return {
    shows: data.map(entry => entry.show)
  }
}

export default Category;