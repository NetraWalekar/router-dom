import Navbar from "../../component/Navbar/navbar";
import Card from './../../component/card/card';
import c1 from './../../c1.jpg'
import c2 from './../../c2.jpg'
import c3 from './../../c3.jpg'
import c4 from './../../c4.jpg'
import './../../component/card/card.css'

function Home(){
    return(
        <div>
            <div>
            <Navbar/>
            </div>
            <div className='card'><Card img={c1} />
            <Card img={c2} />
             <Card img={c3} />
               <Card img={c4} />
            </div>
        </div>
    )
}

export default Home;