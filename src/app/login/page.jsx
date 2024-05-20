import Navbar from '../../components/nav-bar'
import Footer from '../../components/footer'

export default function Login() {
  return (
    <div className='w-full flex items-center flex-col'>
      <Navbar />
      <section>
        <div className="flex min-h-full flex-col justify-center ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Бүртгэлээрээ нэвтэрнэ үү</h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Имэйл</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" placeholder='Имэйл хаяг аар нэвтэрнэ үү' autoComplete="email" required
                         className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password"
                         className="block text-sm font-medium leading-6 text-gray-900">Нууц үг</label>
                </div>
                <div className="mt-2">
                  <input id="password" name="password" type="password" placeholder='Нууц үг ээ оруулна уу' autoComplete="current-password" required
                         className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <button type="submit"
                        className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Нэвтрэх
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>

  );
}
