import Feed from "@components/Feed"
import Footer from "@components/Footer"
import Nav from "@components/Nav"
const Home = () => {
  return (
    <div className="w-full">
<section className="w-full flex-center flex-col">
{/* <Nav/> */}
  <h1 className="head_text text-center" style={{color:"#c22975"}}>
    Share Your Unique 
    <br className="max-md:hidden"/>
    <span className="orange_gradient text-center">Implemented Ideas</span>
  
  <p className="desc justify-center align-middle text-center">
    Welcome to Implemented Ideas a platform where you can share your work and creation be it website or something else. </p></h1>
    <Feed/>
    
</section>

</div>
  )
}

export default Home
