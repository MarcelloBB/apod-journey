import Navbar from "../../components/Navbar"
import PictureCard from "../../components/PictureCard"

import { useEffect, useState } from "react"
import axios from "axios"

const Home = () => {
  const [pic, setPic] = useState({})

  const getPic = async () => {
    const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => setPic(res))
  }

  useEffect(() => {
    getPic()

  }, [])

  return (
    <div className="flex flex-col gap-6">
      <Navbar />

      <PictureCard 
        title={pic.data?.title}
        url={pic.data?.url}
        copyright={pic.data?.copyright}
        explanation={pic.data?.explanation}
      />
      {/* {console.log(pic.data.title)}       */}
      
    </div>
  )
}

export default Home