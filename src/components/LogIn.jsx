import { headerIcn } from '../assets/Login-icons'
import LoginCard from './LoginCard'
import LoginFooter from './LoginFooter'

const LogIn = () => (
  <div className="d-flex flex-column vh-100 bg-white">
    <header className="px-5 pt-4">
      <a href="#">{headerIcn}</a>
    </header>
    <main className="flex-grow-1">
      <LoginCard />
    </main>
    <footer className="py-4 d-none d-lg-block">
      <LoginFooter />
    </footer>
  </div>
)

export default LogIn
