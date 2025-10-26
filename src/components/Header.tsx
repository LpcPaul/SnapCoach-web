import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo.jpg"
              alt="SnapCoach"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-bold text-gray-900">SnapCoach</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Privacy Policy
            </Link>
            <a
              href="#download"
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              Join Android Waitlist
            </a>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-700 hover:text-orange-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
