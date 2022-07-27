import vid from './lucy.mp4';

const AboutVideo: React.FC = () => {
  return (
    <div>
      <video controls muted autoPlay className="relative md:px-8 rounded-[80px]">
        <source src={vid} type="video/mp4" />
        Your browser doesn't support HTML5 video
    </video>
    </div>
  )
}

export default AboutVideo;