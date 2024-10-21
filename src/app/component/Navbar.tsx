import Link from "next/link"

export default function Navbar (){
return(
  <nav>
        <br/>
        <br/>
<h1>My Navbar Component</h1><br/>
<Link href="/">Home</Link><br/><br/>
<Link href="/about">About</Link><br/><br/>
<Link href="/category/crypto">Crypto</Link>

</nav>
  )
}
