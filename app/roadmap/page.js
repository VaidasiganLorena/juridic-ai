import BackToTop from "../backToTop"
import RoadmapPage from "./index"

export const metadata = {
  title: "JuridicAI - Roadmap",
  description: "JuridicAI - Avocatul tău virtual!",
}

const RoadmapLayout = () => {
  return (
    <>
      <RoadmapPage />
      <BackToTop />
    </>
  )
}

export default RoadmapLayout
