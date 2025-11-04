// consider if this will need to be client rendered or not

// import your custom theme hook that connects to your theme context

// set up the theme toggle button using your earlier written toggle logic
export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <header className="px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Dark Mode Demo</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          This is a demonstration of a theme toggle using React Context. Toggle
          between light and dark modes to see the theme change across the entire
          application.
        </p>
      </header>

      <section className="px-6 py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Fast Toggle</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Instantly switch between light and dark themes with a single
                click.
              </p>
            </article>
            <article className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Persistent</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your theme preference is saved and remembered across sessions.
              </p>
            </article>
            <article className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Smooth Transition</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enjoy seamless color transitions when switching themes.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About This Demo</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This application demonstrates how to implement a theme toggle using
          React Context API. The context provides theme state and toggle
          functionality throughout the component tree.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          All styling is handled with Tailwind CSS utility classes, using the{" "}
          <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
            dark:
          </code>{" "}
          variant to apply styles when dark mode is active.
        </p>
      </section>

      <footer className="px-6 py-8 mt-12 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Built with Next.js, React Context, and Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}
