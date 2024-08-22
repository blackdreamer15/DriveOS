import React from 'react'


const Home = () => {
  
  return (
    <div className="max-h-screen font-plus-jakarta-sans scroll-smooth overflow-y-scroll">
      <div>

    <nav className="bg-[#f5ffff] py-4 px-8 shadow fixed top-0 left-0 right-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-2">
              <img
                src="/logo.png"
                alt="Company Logo"
                width={150}
                height={90}  
            />
          </div>
        </div>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#home" className="text-black hover:text-blue-100">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-black hover:text-blue-100">
              About us
            </a>
          </li>
          <li>
            <a href="#contact" className="text-black hover:text-blue-100">
              Contact
            </a>
          </li>
          <li>
            <a href='/login' className="text-black hover:text-blue-100 ">
              Login
            </a>
          </li>
          <li>
            <a
              href="/signup"
              className="text-black hover:text-blue-100"
            >
              Sign up
            </a>
          </li>
        </ul>
      
      </div>
    </nav>
      </div>
    <main className="max-w-screen p-10 mt-16 scroll-smooth space-y-10">
      <section id="home" className="flex items-center">
        <div className="flex-1 space-y-10 pl-5">
          <h1 className="font-bold text-3xl leading-[60px] lg:leading-[80px] md:text-3xl lg:text-5xl xl:text-6xl">
            &quot;<span className="text-[#074EEB]">DriveOS</span>: On-Demand{" "}
            <span className="text-[#074EEB]">Roadside Assistance</span> and{" "}
            <span className="text-[#074EEB]">Fuel Delivery</span> at Your
            Fingertips!&quot;
          </h1>
          {/* <button className="bg-[#074EEB] text-white rounded-md px-10 py-2 text-lg focus:bg-white focus:ring-1 focus:text-blue-500 focus:ring-blue-500 hover:bg-blue-500"> 
            Become a Service Provider on
           </button> */}
          {/* <Link to="/signup" className="bg-[#074EEB] text-white rounded-md px-10 py-2 text-lg focus:bg-white focus:ring-1 focus:text-blue-500 focus:ring-blue-500 hover:bg-blue-500">Become a Service provider</Link> */}
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/Auth Image.svg"
            alt="Intro Illustration"
            width={511}
            height={524.1}
          />
        </div>
      </section>
      <section className="flex items-center mt-15">
        <div className="container mx-auto px-10">
          <div className="flex items-center">
            <div className="w-1/2">
              <img
                src="/designer.svg"
                alt="Ideal illustration"
                width={511}
                height={524.1}
              />
            </div>
            <div className="w-1/2 pl-8 space-y-5">
              <h3 className="text-4xl font-bold text-[#074EEB]">
                Why choose us?
              </h3>
              <p className="text-xl text-justify">
                We know how tough it is when you suddenly get unexpected
                issues with your vehicle. That&rsquo;s why we have catered our
                services to your comfort and satisfaction. Don&rsquo;t give up
                when DriveSOS has got you covered. We&rsquo;re here for you!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="flex items-center mt-15">
        <div className="flex-1 text-center">
          <h3 className="text-4xl font-bold mb-8">About us</h3>
          <p className="text-xl text-center">
            We prioritize quality, professionalism, and customer satisfaction,
            making DriveSOS the go-to solution for all your roadside
            assistance needs. Drive with confidence knowing that DriveSOS is
            just a tap away.
          </p>
          <div className="flex justify-center space-x-20 mt-10">
            <div className="w-60 p-2 bg-[#f5ffff] rounded-xl shadow">
              <h2 className="font-bold text-lg">Mission</h2>
              <div className="flex justify-center items-center">
                <img
                  src="/mission.svg"
                  alt="Card Image"
                  width={200}
                  height={230}
                />
              </div>
              <div className="p-2 mt-5">
                <p>
                  Provide quick and efficient assistance when you need it the
                  most, ensuring your safety and peace of mind
                </p>
              </div>
            </div>
            <div className="w-60 p-2 bg-[#f5ffff] rounded-xl shadow">
              <h2 className="font-bold text-lg">Vision</h2>
              <div className="flex justify-center items-center">
                <img
                  src="/vision.svg"
                  alt="Card Image"
                  width={200}
                  height={230}
                />
              </div>
              <div className="p-2 mt-7">
                <p>
                  Revolutionize roadside assistance by providing drivers with
                  quick, reliable, and accessible support whenever they need
                  it
                </p>
              </div>
            </div>
            <div className="w-60 p-2 bg-[#f5ffff] rounded-xl shadow">
              <h2 className="font-bold text-lg">Core Values</h2>
              <div className="flex justify-center items-center">
                <img
                  src="/corevalues.svg"
                  alt="Card Image"
                  width={200}
                  height={230}
                />
              </div>
              <div className="p-2 mt-5">
                <p className="text-justify">
                  We&rsquo;re focused on professionalism, customer focus,
                  safety, reliability and innovation for all our customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 mt-15">
        <h3 className="text-4xl font-bold text-center">Our Partners</h3>
        <div className="flex justify-center mt-8">
          <div className="bg-[#f5ffff] rounded-xl shadow p-4">
            <img
              width={100}
              height={100}
              className="w-40 h-40 object-contain"
              src="/total.svg"
              alt="Partner 1"
            />
          </div>
          <div className="bg-[#f5ffff] rounded-xl shadow p-4 mx-4">
            <img
              width={100}
              height={100}
              className="w-40 h-40 object-contain"
              src="/michelin.svg"
              alt="Partner 2"
            />
          </div>
          <div className="bg-[#f5ffff] rounded-xl shadow p-4">
            <img
              width={100}
              height={100}
              className="w-40 h-40 object-contain"
              src="/shell.svg"
              alt="Partner 3"
            />
          </div>
          <div className="bg-[#f5ffff] rounded-xl shadow p-4 mx-4">
            <img
              width={100}
              height={100}
              className="w-40 h-40 object-contain"
              src="/BKT.png"
              alt="Partner 4"
            />
          </div>
        </div>
        <h2 className="text-4xl font-bold text-center py-5">& many more!</h2>
      </section>
      <section id="contact" className="flex items-center mt-20">
        <div className="flex-1">
          <img
            src="/phones.svg"
            alt="Intro Illustration"
            width={511}
            height={524.1}
          />
        </div>
        <div className="flex-1 space-y-5">
          <h3 className="text-4xl font-bold text-[#074EEB]">
            Download the mobile app now to receive the best roadside
            assistance service
          </h3>
          <p className="text-xl text-justify">
            Install the mobile app and sign up to gain access to the
            incredible benefits when you have DriveOS. Whatever service you
            need for your vehicle, DriveOS has got you covered!
          </p>
        </div>
      </section>
      <section className="flex items-center">
        <div className="flex-1 space-y-5">
          <h3 className="text-4xl font-bold ">
            Interested in becoming a Service Provider? Sign up right now!
          </h3>
          <p className="text-xl text-justify">
            Sign up with DriveOS today and become a valued Service Provider
            today. Let our customers find you and experience the quality of
            your services. Your business and new customers will thank you.
            Sign up now!
          </p>
        </div>
        <div className="flex-1 pt-10">
          <img
            src="/signup.svg"
            alt="Intro Illustration"
            width={511}
            height={524.1}
          />
        </div>
      </section>
      <section id="contact" className="flex items-center mt-20">
        <div className="flex-1">
          <img
            src="/contactus.svg"
            alt="Contact Illustration"
            width={511}
            height={524.1}
          />
        </div>
        <div className="flex-1 space-y-5">
          <h3 className="text-4xl font-bold">Contact</h3>
          <p className="text-xl text-justify">
            Feel free to contact us for any assistance or questions. We are
            happy to communiucate with you and provide you with any
            information you require. Email us today at DriveOSGH@gmail.com
          </p>
        </div>
      </section>
      <section className="py-8">
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Follow us</h3>
            <p className="pt-5 text-[#8E8E93]">
              Keep up with us on our social platforms and get the latest news
              on our services
            </p>
            <div className="flex justify-center mt-8 space-x-5">
              <div className="bg-[#1D3261] cursor-pointer rounded-xl shadow w-max h-max flex flex-row items-center justify-center p-2">
                <img
                  width={100}
                  height={100}
                  className="w-8 h-8"
                  src="/Instagram.svg"
                  alt="Instagram"
                />
              </div>
              <div className="bg-[#1D3261] cursor-pointer rounded-xl shadow w-max h-max flex flex-row items-center justify-center p-2">
                <img
                  width={100}
                  height={100}
                  className="w-8 h-8"
                  src="/Twitter.svg"
                  alt="Twitter"
                />
              </div>
              <div className="bg-[#1D3261] cursor-pointer rounded-xl shadow w-max h-max flex flex-row items-center justify-center p-2">
                <img
                  width={100}
                  height={100}
                  className="w-8 h-8"
                  src="/Linkedin.svg"
                  alt="LinkedIn"
                />
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Help</h3>
            <ul className="space-y-4 text-[#8E8E93] py-4">
              <li className="pl-2">FAQs</li>
              <li className="pl-2">Speak to a representative</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Business</h3>
            <ul className="space-y-4 text-[#8E8E93] py-4">
              <li className="pl-2">Up and coming promotions</li>
              <li className="pl-2">Become an investor</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Talk to us</h3>
            <p className="text-[#8E8E93] py-8">
              Send us your email and we&rsquo;ll reach out to you in less than
              24 hours
            </p>
            {/* <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 border rounded-md"
              /> */}
              {/* <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
                Submit
              </button> */}
            </div>
          </div>
        {/* </div> */}
      </section>
    </main>
    <footer className="bg-[#f5ffff] py-2 px-8 text-center">
      <p>&copy; {new Date().getFullYear()} DriveOS</p>
    </footer>
  </div>
  )
}

export default Home