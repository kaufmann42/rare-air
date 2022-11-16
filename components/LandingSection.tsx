import { VideoPlayer } from "./VideoPlayer";

export function LandingSection() {
  return (
    <section className="text-center m-auto w-full max-w-5xl">
      <h1 className="mb-16">Turn Your Audience Into SuperFans</h1>
      <div className="grid items-end grid-cols-1 lg:grid-cols-6">
        <div className="col-span-1">
          <h3 className="mb-2">YOU</h3>
          <p>
            However, that being said, it is becoming increasingly obvious that
            our world is developing an unhealthy attachment to it.
          </p>
        </div>
        <VideoPlayer />
        <div className="col-span-1">
          <h3 className="mb-2">US</h3>
          <p>
            However, that being said, it is becoming increasingly obvious that
            our world is developing an unhealthy attachment to it.
          </p>
        </div>
      </div>
    </section>
  );
}
