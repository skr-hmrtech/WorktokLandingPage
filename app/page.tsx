
import dynamic from 'next/dynamic';

// Dynamically import the home page content to avoid SSR issues
const HomePage = dynamic(() => import('./home'), {
  ssr: false,
});

export default function Page() {
  return <HomePage />;
}
