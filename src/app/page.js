import Allproduct from './component/Allproduct/Allproduct'
import Banner from './component/Banner/Banner'

export default function Home() {
  return (
    <div className='flex flex-col  justify-center'>
      <Banner></Banner>
    <Allproduct></Allproduct>
    </div>
  )
}
