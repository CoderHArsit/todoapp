import Feed from "@components/Feed"
import Footer from "@components/Footer"
import Nav from "@components/Nav"
const Home = () => {
  return (
    <div className="w-full">
<section className="w-full flex-center flex-col">
{/* <Nav/> */}
  <h1 className="head_text text-center" style={{color:"#c22975"}}>
    Write Your Daily
    <br className="max-md:hidden"/>
    <span className="orange_gradient text-center">Tasks To Do</span>
  
 </h1>
    <Feed/>
    
</section>

</div>
  )
}

export default Home
