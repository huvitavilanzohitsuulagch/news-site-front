import Navbar from '../../../components/nav-bar'
import Footer from '../../../components/footer'

export default function NewsDetailPage({params}) {
  console.log(params)
  return (
    <div className='w-full flex items-center flex-col'>
    <Navbar />
      <section>
        hi
      </section>
      <Footer />
    </div>
  )
}