
import { Metadata } from 'next';
import Layout from './components/Layouts'; // Import your Layout component

export const metadata: Metadata = {
  title: 'My App',
  description: 'My application description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
