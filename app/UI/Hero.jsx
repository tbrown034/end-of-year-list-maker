import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl ">Lorem Ipsum Dolor Sit Amet</h1>
        <h3 className="text-2xl">
          Sed at velit sit amet massa gravida imperdiet. Quisque vitae rhoncus
          orci. Ut auctor dictum libero at condimentum. Integer id dui pharetra
          mi suscipit fringilla at ut justo.
        </h3>
      </div>
      <div className="flex gap-4">
        <button className="p-2 border-2 rounded black">Button 1</button>
        <button className="p-2 border-2 rounded black">Button 2</button>
      </div>
      <Image
        src="https://picsum.photos/600/300"
        alt="Placeholder"
        width={600}
        height={300}
        priority
      />
    </div>
  );
};

export default Hero;
