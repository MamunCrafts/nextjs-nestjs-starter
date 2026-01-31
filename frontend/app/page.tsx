import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 px-4 text-center">
      <h1 className="text-5xl font-extrabold text-white mb-6">
        Welcome to <span className="text-blue-500">MamunCrafts</span>
      </h1>
      <p className="text-zinc-400 text-xl max-w-2xl mb-12">
        A modern starter kit built with Next.js, NestJS, and TypeORM.
        Secure your application with our robust JWT authentication system.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/login"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/20"
        >
          Sign In
        </Link>
        <Link
          href="/register"
          className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl transition-all border border-zinc-700"
        >
          Create Account
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
          <h3 className="text-white font-bold mb-2">Next.js 15</h3>
          <p className="text-zinc-500 text-sm">Turbo-charged frontend with App Router and Server Components.</p>
        </div>
        <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
          <h3 className="text-white font-bold mb-2">NestJS Backend</h3>
          <p className="text-zinc-500 text-sm">Scalable Node.js architecture with TypeScript and TypeORM.</p>
        </div>
        <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
          <h3 className="text-white font-bold mb-2">JWT Security</h3>
          <p className="text-zinc-500 text-sm">Secure route protection and session management out of the box.</p>
        </div>
      </div>
    </div>
  );
}
