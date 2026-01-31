const NavigationHints = () => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="flex items-center gap-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-full px-6 py-3 border border-neutral-200 dark:border-neutral-700 shadow-lg">
        <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Swipe or use arrows to navigate</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default NavigationHints
