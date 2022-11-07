import Image from "next/image";

export function VideoPlayer() {
  return (
    <div className="relative col-span-4 m-auto">
      <video
        controls
        className="absolute h-[230px] w-[395px] md:h-[265px] md:w-[470px] object-cover rounded top-[16px] left-[16px]"
        src="/assets/video.mov"
      ></video>
      <Image
        src="/assets/imac.png"
        alt="an image of a imac"
        width={500}
        height={500}
      />
    </div>
  );
}
