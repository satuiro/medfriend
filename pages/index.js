import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <div>
          <Link href="/calorie">Calorie Assistant</Link>
        </div>
        <div></div>
      </main>
    </>
  );
}
