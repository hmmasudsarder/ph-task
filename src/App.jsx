import Item from "./Components/According/Item"
import Banner from "./Components/Banner/Banner"
import BannerCard from "./Components/Banner/BannerCard"
import Doctors from "./Components/Doctors/Doctors"
import InfoSection from "./Components/InfoSection/InfoSection"
import Navbar from "./Components/Nabvar/Navbar"
import Service from "./Components/Service/Service"
import ServiceCard from "./Components/Service/ServiceCard"

function App() {

  return (
    <div className="">
      <Navbar/>
      <Banner/>
      <BannerCard/>
      <InfoSection/>
      <Service/>
      <ServiceCard/>
      <Item/>
      <Doctors />
    </div>
  )
}

export default App
