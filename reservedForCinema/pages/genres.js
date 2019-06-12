import Layout from './components/Layout';
import Link from 'next/link';

import "../static/styles/style.scss";


export default function Genres() {
    return (
      <div>
        <Layout>
          <div className="genres">

            <div className="genres-genre">
                <Link as={`/genres/comedy`} href={`/category`}>
                    <h3>Comedy</h3>
                </Link>
            </div>

            <div className="genres-genre">
                <Link as={`/genres/action`} href={`/category`}>
                    <h3>Action</h3>
                </Link>
            </div>

            <div className="genres-genre">
                <Link as={`/genres/adventure`} href={`/category`}>
                    <h3>Adventure</h3>
                </Link>
            </div>

          </div>
        </Layout>        
      </div>
    )
}
