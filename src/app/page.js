import Navbar from '../components/nav-bar'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className='w-full flex items-center flex-col'>
      <Navbar/>
      <section className='w-full bg-gray-300'>
        hi
      </section>
      <Footer />
    </div>
  );
}
