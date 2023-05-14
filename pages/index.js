import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <div className="row">
          <div className="col-lg-4 mb-3"></div>
          <div className="col-lg-4 mb-3">
            <Image src = {require('Images/logo.png')} alt = "logo"/>
          </div>
          <div className="col-lg-4 mb-3"></div>
        </div>
        <div className="row justify-content-evenly">
        <div className="col-4 ms-auto">
          <Link href="/calorie"><button type="button" class="btn btn-lg btn-outline-warning">Calorie Assistant</button></Link>
        </div>
        <div className="col-4 ms-auto">
          <Link href="/"><button type="button" class="btn btn-lg btn-outline-warning">Medical Assistant</button></Link>
        </div>
        </div>

      </main>
    </>
  );
}
