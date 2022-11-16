import { League_Spartan } from "@next/font/google";
import Image from "next/image";
import BGChart from "../components/bgchart/BGChart";
import classnames from "classnames";
import { VideoPlayer } from "../components/VideoPlayer";

// If loading a variable font, you don&apos;t need to specify the font weight
const font = League_Spartan();

export default function Home() {
  return (
    <div
      className={classnames(
        font.className,
        "w-full max-w-4xl m-auto text-center my-[88px]"
      )}
    >
      <h1 className="mb-[22px]">Get To Know Us Before Working With Us</h1>
      <h3 className="mb-[75px]">
        Give us 5 minutes to share our story, introduce ourselves, and hopefully
        change your content world.
      </h3>
      <video
        className="w-full"
        controls
        src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
      ></video>
    </div>
  );
}
