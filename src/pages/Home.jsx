const Home = () => {
  return (
    <>
      <main className="section-1 w-full min-h-[75vh] md:min-h-[40vh] lg:min-h-[80vh] p-5 grid grid-rows-2 md:grid-rows-none md:grid-cols-2">
        <div className="h-full flex flex-col justify-center">
          <p className="font-primary text-[1.9rem] text-center md:text-start md:text-[2.5rem] lg:text-[4.5rem]">
            Creating Lasting Impressions Through <span className="primary-highlight font-tasteful">Quality</span> Apparel.
          </p>
          <p className="font-quote text-[1rem] text-center md:text-start md:text-[1.3rem] lg:text-[2rem] mt-5 md:mt-10">
            Inspired by Vision, Perfected by Craftsmanship.
          </p>
        </div>
        <div className="h-full grid md:place-items-center">
          <img src="/assets/apparel-2.png" alt="" />
        </div>
      </main>
      <div className="strip text-[15px] lg:text-[20px]">
        <p className="">Your Partner in Premium Apparel Production. Where Every Garment Tells a Story of Quality.</p>
      </div>
      <section className="section-2 w-full min-h-[100vh] md:min-h-[80vh] lg:min-h-[80vh] lg:my-20 p-5 grid lg:grid-rows-none lg:grid-cols-3 md:grid-rows-2 md:grid-cols-none">
        <div className="md:border-b-2 lg:border-b-0 lg:border-r-2 flex items-center lg:col-span-2 col-span-3 lg:p-5 lg:py-0 md:py-0 py-24 border-[#0000009c]">
          <p className="font-primary lg:text-[4.5rem] md:text-[3rem] text-[1.7rem] text-center font-bold">&quot;Produce <span className="text-yellow-800 font-tasteful">high-quality</span> apparel that brings client&apos;s visions to life with efficient manufacturing&quot;</p>
        </div>
        <div className="grid lg:grid-cols-none md:grid-cols-3 md:col-span-3 lg:col-span-1 lg:grid-rows-3 lg:h-full md:h-fit p-5 lg:place-items-start lg:text-[1.2rem] text-center lg:text-start font-quote font-bold">
          <div className="lg:border-b-2 md:border-r-2 lg:border-r-0 md:border-b-0 lg:border-t-0 md:border-t-0 border-b-2 border-t-2 p-5 border-[#0000009c]"><p>The latest in machinery and technology to produce high-quality apparel with precision and efficiency with eco-friendly materials and processes to minimize environmental impact and promote sustainability in the fashion industry</p></div>
          <div className="lg:border-b-2 md:border-r-2 lg:border-r-0 md:border-b-0 border-b-2 p-5 border-[#0000009c]"><p>Aiming to set new standards in quality, craftsmanship, and customer satisfaction and helping clients bring their visions to life through reliable, high-quality, and flexible manufacturing solutions</p></div>
          <div className="p-5 border-[#0000009c]"><p>Prioritizing open communication and collaboration with each client to understand and meet their unique needs and staying connected with industry trends, participating in events, and giving back to the community to build a stronger</p></div>
        </div>
      </section>
      <section className="section-3 mt-28 w-full min-h-[75vh] md:min-h-[40vh] lg:min-h-[60vh] p-5">
        <div className="min-h-[75vh] lg:min-h-[60vh] grid grid-cols-1 lg:grid-cols-3 grid-rows-6 lg:grid-rows-3 gap-3 text-[1.1rem] md:text-[1.5rem] font-quote font-bold">
          <div className="grid place-items-center">
            <img src="/assets/model-1.jpg" className="w-[300px]" alt="Photo by Anne Spratt" />      
          </div>
          <div className="grid place-items-center text-center">
            <p>Our garments are crafted with the finest fabrics to ensure durability, comfort, and style.</p>
          </div>
          <div className="grid place-items-center">
            <img src="/assets/model-2.jpg" className="w-[300px]" alt="" />
          </div>
          <div className="grid place-items-center text-center">
            <p>We offer tailored solutions for bulk orders, allowing clients to customize designs, colors, and sizes.</p>
          </div>
          <div className="grid place-items-center">
            <img src="/assets/model-3.jpg" className="w-[300px]" alt="" />
          </div>
          <div className="grid place-items-center text-center">
            <p>With 30+ years of expertise in the clothing industry, we understand and deliver on market trends.</p>
          </div>
        </div>
      </section>
      <section className="section-4 w-full grid place-items-center p-5">
        <p className="font-primary font-semibold lg:text-[2.5rem] text-[1.3rem] text-center text-white">Has been redefining the clothing manufacturing standards with a commitment to quality and sustainability</p>
      </section>
      <section className="section-5 w-full min-h-[50vh] md:min-h-[50vh] p-5 grid grid-cols-3 md:grid-rows-1 grid-rows-2 mt-20">
        <div className="md:col-span-2 col-span-3">
          <p className="title font-primary font-semibold">From Modern to Traditional</p>
          <p className="description font-quote lg:text-[2rem] lg:mt-10 md:mt-6 mt-4">
            Explore our exclusive range of apparel that blends contemporary styles with timeless traditions. Whether you’re looking for modern chic or classic elegance, our collection caters to every taste and occasion.
          </p>
        </div>
        <div className="relative flex">
          <img src="assets/knitted-wool.jpg" alt="" className="w-[300px] absolute top-2 left-2"/>
          <img src="assets/suits-line.jpg" alt="" className="w-[300px] absolute top-4 left-32"/>
          <img src="assets/girl-in-jeans.jpg" alt="" className="w-[300px] absolute top-6 left-52"/>
        </div>
      </section>
    </>
  );
};

export default Home;
