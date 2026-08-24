import { redirect } from 'next/navigation';

// For static export: redirect bare domain root to /en
export default function RootPage() {
  redirect('/en');
}
