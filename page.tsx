
import Link from 'next/link';

export default function Home() {
  return (
    <main id="main" className="p-6 max-w-5xl mx-auto space-y-10">
      <section aria-labelledby="hero-title" className="space-y-4">
        <h1 id="hero-title" className="text-4xl font-bold tracking-tight">AI Frontend Starter</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          Accessible, responsive, and fast by default. Built with Next.js + Tailwind.
        </p>
        <div className="flex gap-3">
          <Link className="px-4 py-2 rounded-lg border hover:bg-neutral-100 dark:hover:bg-neutral-800" href="#features">View features</Link>
          <a className="px-4 py-2 rounded-lg border hover:bg-neutral-100 dark:hover:bg-neutral-800" href="https://web.dev/measure/">Performance tips</a>
        </div>
      </section>

      <section id="features" aria-labelledby="features-title" className="space-y-4">
        <h2 id="features-title" className="text-2xl font-semibold">Features</h2>
        <ul className="grid sm:grid-cols-2 gap-3 list-disc pl-5">
          <li>App Router + TypeScript</li>
          <li>Playwright e2e tests</li>
          <li>Axe accessibility checks</li>
          <li>Lighthouse CI integration</li>
        </ul>
      </section>

      <section aria-labelledby="contact-title" className="space-y-2">
        <h2 id="contact-title" className="text-2xl font-semibold">Contact</h2>
        <form className="grid gap-2 max-w-md" aria-describedby="contact-help" onSubmit={(e) => e.preventDefault()}>
          <label className="grid gap-1">
            <span>Name</span>
            <input name="name" className="border rounded p-2" required />
          </label>
          <label className="grid gap-1">
            <span>Email</span>
            <input type="email" name="email" className="border rounded p-2" required />
          </label>
          <label className="grid gap-1">
            <span>Message</span>
            <textarea name="message" rows={4} className="border rounded p-2" />
          </label>
          <p id="contact-help" className="text-sm text-neutral-500">This is a demo form. Keyboard navigation and labels included.</p>
          <button className="px-4 py-2 rounded-lg border hover:bg-neutral-100 dark:hover:bg-neutral-800" type="submit">Send</button>
        </form>
      </section>
    </main>
  );
}
