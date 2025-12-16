
const Home = () => {
  return (
    <>
      <main className="py-5">
        <section className="flex justify-evenly text-white">
          <div className="w-[40%] self self-center">
            <div className="text-wrap">
              <p className="underline">We Develop Full-Stack Projects</p>
              <h1 className="text-3xl text-sky-400 font-bold italic py-2">
                Welcome To Developies
              </h1>
              <p className="font-light text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus natus recusandae consequatur repudiandae
              </p>
            </div>
            <div className="mt-7 flex gap-5">
              <button className="bg-sky-600 font-medium border-2 border-sky-500 rounded-md px-3">Login</button>
              <button className="border-2 px-3 rounded-md border-gray-500 bg-gray-600">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img className="h-80" src="./images/home.jpg" alt="" />
          </div>
        </section>

       

          <h1 className="text-4xl text-center font-bold text-cyan-500">About Us</h1>
         <section className="flex text-white my-14 w-[90%] mx-auto">
        <div>
          <div>
            <p>Welcome To Hims Technical</p>
            <h1 className="text-3xl font-bold my-2">Why Choose us ?</h1>
            <div className="font-light text-sm space-y-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              necessitatibus inventore omnis iste exercitationem ut rem! Tempora
              iste dicta asperiores?
            </p>
            <p>
              pragram2 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Delectus, quis autem perspiciatis culpa mollitia doloribus magnam
              ab.
            </p>
            <p>
              paragraph3 Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptates, porro suscipit consequatur fugiat laudantium
              ducimus!
            </p>
            <p>
              partagraph4 Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Ipsam suscipit repellat officiis veritatis. Obcaecati quis
              at sit autem beatae
            </p>
            </div>
          </div>
          <div>
            <button className="bg-blue-600 px-3 font-semibold rounded-md my-3">
              Contact
            </button>
          </div>
        </div>
        <div className="self-center">
          <img className="" src="./images/about.png" alt="" />
        </div>
      </section>




       <section className="py-5 bg-slate-600 w-[90%] mx-auto flex text-center justify-center  text-white ">
          <div className="border-r-2 px-15">
            <h1 className="text-xl font-semibold">50+</h1>
            <p className="font-light text-sm">Registred Comopanies</p>
          </div>
          <div className="text-center border-r-2 px-15">
            <h1 className="text-xl font-semibold">100,000+</h1>
            <p className="font-light text-sm">Happy Clients</p>
          </div>
          <div className=" text-center border-r-2 px-15">
            <h1 className="text-xl font-semibold">500+</h1>
            <p className="font-light text-sm">Well Known Developers</p>
          </div>
          <div className="text-center px-15">
            <h1 className="text-xl font-semibold">24/7</h1>
            <p className="font-light text-sm">Service</p>
          </div>
        </section>

      </main>
    </>
  );
};

export default Home;
