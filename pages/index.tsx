import { Inter } from "@next/font/google";
import Image from "next/image";
import BGChart from "../components/bgchart/BGChart";
import classnames from "classnames";
import * as THREE from "three";
import { Carousel } from "../components/carousel/Carousel";

// If loading a variable font, you don&apos;t need to specify the font weight
const inter = Inter();

const pexel = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;

const curve = new THREE.QuadraticBezierCurve3(
  new THREE.Vector3(-4.5, 0, 0),
  new THREE.Vector3(0, 0, -5),
  new THREE.Vector3(4.5, 0, 0)
);

const points = curve.getPoints(8);

const images = [
  // Front
  {
    position: points[0],
    rotation: [0, Math.PI / 4, 0],
    url: pexel(1103970),
  },
  // Back
  {
    position: points[1],
    rotation: [0, Math.PI / 4, 0],
    url: pexel(416430),
  },
  {
    position: points[2],
    rotation: [0, Math.PI / 4, 0],
    url: pexel(310452),
  },
  // Left
  {
    position: points[3],
    rotation: [0, 0, 0],
    url: pexel(327482),
  },
  {
    position: points[4],
    rotation: [0, 0, 0],
    url: pexel(325185),
  },
  {
    position: points[5],
    rotation: [0, 0, 0],
    url: pexel(358574),
  },
  // Right
  {
    position: points[6],
    rotation: [0, -Math.PI / 4, 0],
    url: pexel(227675),
  },
  {
    position: points[7],
    rotation: [0, -Math.PI / 4, 0],
    url: pexel(911738),
  },
  {
    position: points[8],
    rotation: [0, -Math.PI / 4, 0],
    url: pexel(1738986),
  },
];

export default function Home() {
  return (
    <div className={classnames(inter.className, "w-full")}>
      <main className="gap-10 flex flex-col w-full justify-center items-center">
        <Carousel images={images} />
        <section className="text-center relative pb-20 w-full max-w-5xl">
          <h2>
            We Create Content.
            <br />
            That Creates Conversations.
            <br />
            That Drives Conversions.
          </h2>
          <p className="max-w-md m-auto my-8">
            Content is the middle man between attention and conversions. Good
            content is measured by consumption. Great content is measured by
            conversions. The best content drives both conversations and
            conversions. The businesses that create the best content will create
            the best brands.
          </p>
          <BGChart />
        </section>
        <section className="bg-black my-10 w-full text-white text-center">
          <h2 className="py-12">
            Our Mission Is To Help Brands
            <br />
            Like Yours Cultivate{" "}
            <span className="animate-charcter">Super Fans</span>
          </h2>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 max-w-5xl">
          <div>
            <h2 className="my-4">
              Building A Superfan Is Only As Good As Your Brand&apos;s
              Consumption Journey
            </h2>
            <p>
              Attention is the new currency. And Content is the new transaction
              center. Your job is to make sure each transaction is a phenomenol
              experience. Thats the importance of optimizing your brand&apos;s
              consumption journey. From the 5 second interaction via social to
              binge-watching a 20-minute episode on Youtube - this journey is
              how you build superfans.
            </p>
          </div>
          <div>
            <iframe
              height={400}
              width={400}
              className="m-auto"
              src="https://embed.lottiefiles.com/animation/117006"
            ></iframe>
          </div>
        </section>
        <section className="max-w-5xl text-center">
          <h2>
            Three Types Of Brands.
            <br />
            Three Services.
            <br />
            Just Results.
          </h2>
          <div className="relative h-[300px] w-full">
            <Image
              src="/assets/three-circles.png"
              alt="This is an image of the three types of brands we work with."
              fill
              className="object-contain"
            />
          </div>
          <div>
            <p>
              We don&apos;t want to be a jack of all trades. We want to be the
              absoulte best at what we do and who we do it with. We want to work
              with brands impacting people&apos;s tomorrow and create the
              content that drives change today.
            </p>
          </div>
        </section>
        <section className="text-white w-full text-center p-8 bg-black conic">
          <h2>Are We A Fit?</h2>
          <p>
            We hate headaches. We don&apos;t want any.
            <br />
            And we don&apos;t want you to have any.
          </p>
        </section>
        <section className="text-center">
          <h2>Don&apos;t Work With Us...</h2>
          <p className="my-6">
            If you&apos;re trying to just fill a content calendar. Work with us
            if you&apos;re willing to take chances, break the mold, and build a
            damn rocketship...
          </p>
          <button className="px-8 py-3 bg-black text-lg text-white font-bold text-center">
            Should You Work With Us?
          </button>
        </section>
      </main>
    </div>
  );
}
