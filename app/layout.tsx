import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'SimpliTrade — Learn to Trade First',
  description: 'Educational trading simulator. Learn to Trade First.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <footer style={{ padding: 24, opacity: .7 }}>
          © {new Date().getFullYear()} SimpliTrade — Learn to Trade First.
        </footer>
      </body>
    </html>
  );
}
