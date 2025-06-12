import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </div>
  );
}

export default HomePage;