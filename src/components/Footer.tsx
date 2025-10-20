const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Brand */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">SnapCoach</h3>
          <p className="text-gray-400">
            Your AI-powered photography companion
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SnapCoach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
