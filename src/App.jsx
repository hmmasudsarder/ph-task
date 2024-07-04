import Banner from "./Components/Banner/Banner"
import BannerCard from "./Components/Banner/BannerCard"
import Doctors from "./Components/Doctors/Doctors"
import InfoSection from "./Components/InfoSection/InfoSection"
import Navbar from "./Components/Nabvar/Navbar"

function App() {

  return (
    <div className="">
      <Navbar/>
      <Banner/>
      <BannerCard/>
      <InfoSection/>
      {/* <Doctors /> */}
    </div>
  )
}

export default App
