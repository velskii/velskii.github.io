/** @jsxImportSource https://esm.sh/preact@10.10.5 */

import type { ComponentChildren } from "npm:preact";

export function Layout({ children }: { children: ComponentChildren }) {
  return (
    <html data-theme="light">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.23.0/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <title>Velskii</title>
      </head>

      <div>
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>Copyright © 2025 - All right reserved by Velskii</p>
          </aside>
        </footer>
      </div>
    </html>
  );
}

export function HomePage({ user }: { user: string }) {
  return (
    <Layout>
      <div>
        <h1>Welcome to the home page</h1>
        <p>Hello {user}</p>
      </div>
    </Layout>
  );
}
