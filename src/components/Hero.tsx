const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: 'url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '66.67vh', // 2/3 of viewport height
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center py-20">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          SnapCoach
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto drop-shadow-md">
          See better with AI.
        </p>

        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-md">
          Your AI-Powered Photography Companion
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#download"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Download Now
          </a>
          <a
            href="#features"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white hover:bg-white/10 rounded-lg transition-colors backdrop-blur-sm"
          >
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
