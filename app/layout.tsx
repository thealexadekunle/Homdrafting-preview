import type { Metadata } from 'next';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Custom Home and Renovation Design in Bowmanville | Hōm',
  description: 'Hōm Drafting and Design offers custom home design, renovation drawings, site plans, and municipal support from Bowmanville, Ontario.',
  robots: { index: false, follow: false },
  openGraph: { title: 'Hōm | A considered home. A personal expression.', description: 'Thoughtful residential design in Bowmanville, Ontario.', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-CA"><body>{children}</body></html>;
}
