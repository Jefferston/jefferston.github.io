import Link from 'next/link'

const Header = () => (
  <div className="header">

   <div className="header-span">Cinema4you</div>

    <div className="navbar">
      <ul>
    
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>

        <li>
          <Link href="/genres">
            <a>Genres</a>
          </Link>
        </li>

        <li>
          <Link href="/registration">
            <a>Registration</a>
          </Link>
        </li>

      </ul>
    </div>

  </div>
)

export default Header