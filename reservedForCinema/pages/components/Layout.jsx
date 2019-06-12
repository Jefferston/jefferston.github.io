import Header from './Header';
import Head from 'next/Head'

const Layout = props => (
  <div>
    <Head>
        <title>Welcome</title>
        {/* <script src="../static/fixings.js"></script> */}
    </Head>

    <main>
      <Header/>
      <div className="cinema">    
        {props.children}
      </div> 
    </main>

  </div>
)

export default Layout;