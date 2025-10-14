import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950" />
        <div className="absolute -top-24 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white" />
      </div>

      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white">404</span>
          <span>Halaman tidak ditemukan</span>
        </div>

        <h1 className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Oops! Sepertinya kamu tersesat
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
          URL yang kamu akses tidak tersedia. Periksa kembali alamat atau kembali ke beranda untuk melanjutkan eksplorasi.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 dark:bg-gray-700 px-5 py-3 text-sm font-semibold text-white dark:text-gray-900 shadow-sm transition hover:bg-black dark:hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/50"
          >
            <span>← Kembali ke Beranda</span>
          </Link>
        </div>

        {/* Subtle helper tips */}
        <div className="mt-8 text-xs text-gray-500">
          <p>Tip: Coba buka navigasi utama atau gunakan pencarian browser.</p>
        </div>
      </section>
    </main>
  );
}


