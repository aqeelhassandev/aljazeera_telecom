export default function RootPage() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0; url=/en/" />
        <link rel="canonical" href="https://jt.iq/en/" />
        <title>Al Jazeera Telecom</title>
      </head>
      <body>
        <p>
          Redirecting to <a href="/en/">jt.iq/en</a>…
        </p>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace("/en/");`,
          }}
        />
      </body>
    </html>
  );
}
