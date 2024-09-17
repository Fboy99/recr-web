import Image from 'next/image';
import  Footer  from '../components/Footer';
import { Navbar } from '../components/Navbar';
import img9 from "../assets/image9.jpeg"

const AboutUs = () => {
  return (
    <>
    {/* <Navbar /> */}
    <div className="my-16 bg-white text-black pb-12">


      <div className=" mx-auto px-6 lg:px-16 py-12 max-w-[1080px]">
        <h1 className="text-4xl font-bold text-center mb-2">About Us</h1>
        <p className="text-center text-black mb-12">Why we care about the opportunity card</p>

        <div className="flex flex-col items-center">
          <div className="w-full mb-8 flex justify-center">
            <Image
              src={img9}
              alt="About us"
              width={1080}
              height={800}
              className="rounded-[20px]"
            />
          </div>

          <div className="w-full max-w-screen-md space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our mission</h2>
              <p className="text-black-400 leading-relaxed pb-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis metus at tortor pulvinar varius. Integer eu nulla ut libero convallis posuere. Suspendisse nec magna et nunc tincidunt sollicitudin.
                <br /><br />
                Fusce vulputate elementum nulla, quis bibendum metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor.
                <br /><br />
                Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                <br /><br />
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Shortage of skilled workers in Germany</h2>
              <p className="text-black-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                <br /><br />
                Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis.
                <br /><br />
                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.
                <br /><br />
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.
                <br /><br />
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
    </>
  );
};

export default AboutUs;
