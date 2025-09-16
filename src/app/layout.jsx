import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Digital Media Marketing Platform - Professional Marketing Solutions
        </title>
        <meta
          name="description"
          content="Transform your digital presence with our comprehensive marketing platform. Expert services in social media marketing, SEO, content creation, and digital advertising."
        />
        <meta
          name="keywords"
          content="digital marketing, social media marketing, SEO, content marketing, digital advertising, marketing platform"
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />

        {/* Meta Pixel (Facebook Pixel) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* LinkedIn Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "YOUR_LINKEDIN_PARTNER_ID";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
                if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);})(window.lintrk);
            `,
          }}
        />

        {/* Preload Spectral font */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Spectral:wght@300;400;500;600;700;800&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Spectral:wght@300;400;500;600;700;800&display=swap"
          />
        </noscript>
      </head>
      <body className="font-spectral bg-white text-gray-900">
        <QueryClientProvider client={queryClient}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </QueryClientProvider>

        {/* Google Fonts import for Spectral */}
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Spectral:wght@300;400;500;600;700;800&display=swap');
          .font-spectral {
            font-family: 'Spectral', serif;
          }
        `}</style>
      </body>
    </html>
  );
}
