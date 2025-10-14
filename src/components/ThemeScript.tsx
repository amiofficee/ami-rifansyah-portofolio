export default function ThemeScript() {
  const code = `(() => {
    try {
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = stored === 'light' || stored === 'dark' ? stored : (prefersDark ? 'dark' : 'light');
      const root = document.documentElement;
      root.setAttribute('data-theme', theme);
      if (theme === 'dark') root.classList.add('dark');
      else root.classList.remove('dark');
    } catch {}
  })();`;

  return (
    <script id="theme-init" dangerouslySetInnerHTML={{ __html: code }} />
  );
}


