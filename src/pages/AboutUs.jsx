const AboutUs = () => {
  return (
    <>
      <div className="section-1 about p-3 lg:mt-0 mt-5 lg:p-10 h-auto">
        <p className="font-primary font-bold text-[2.5rem] uppercase lg:text-start text-center">About Us</p>
          <div className="grid lg:gap-0 gap-5 lg:grid-row-1 lg:grid-cols-3 grid-cols-none mt-5 lg:mt-10">
            <div className="font-figtree text-gray-500 lg:text-start text-center lg:col-span-1 col-span-2">
              <p className="lg:text-[1.7rem] text-[1.5rem]">Our vision</p>
            </div>
            <div className="col-span-2 grid place-items-center font-quote font-bold text-[1.2rem] lg:text-start text-center">
              <p>At Aesthethic 7 Creations, our vision is to redefine the standards of apparel manufacturing by seamlessly combining quality and sustainability. We aspire to Inspire confidence and comfort through our meticulously crafted garments. Lead the industry globally with innovative manufacturing techniques and eco-friendly practices.</p>
              <p className="lg:mt-2 mt-5">Foster long-term partnerships by delivering unparalleled value and excellence in every product. We aim to be the first choice for businesses seeking reliable, high-quality, and sustainable apparel solutions.</p>
            </div>
          </div>
          <hr className="border-[0.1rem] border-[#3737374a] my-10"/>
          <div className="grid lg:gap-0 gap-5 lg:grid-row-1 lg:grid-cols-3 grid-cols-none my-14 lg:mt-0">            <div className="font-figtree text-gray-500 lg:text-start text-center lg:col-span-1 col-span-2">
             <p className="lg:text-[1.7rem] text-[1.5rem]">Work Ethics</p>
          </div>
          <div className="col-span-2 grid place-items-center font-quote font-bold text-[1.2rem] lg:text-start text-center">
            <p>Every garment we create reflects our dedication to superior craftsmanship and attention to detail. We build trust by maintaining open and honest communication with our clients, partners, and employees.</p>
            <p className="lg:mt-2 mt-5">Our eco-conscious manufacturing processes minimize environmental impact while ensuring high-quality outputs. We value the skills, expertise, and ideas of every team member, having a collaborative and supportive environment. Our partnerships with clients are built on mutual respect and shared goals.</p>
          </div>
        </div>
      </div>
      <div className="strip text-[15px] lg:text-[20px]">Our customers are at the heart of everything we do.</div>
      <div className="section-2 info min-h-[80vh] lg:min-h-[60vh] lg:mt-0 mt-5 lg:p-10 grid lg:grid-cols-3 lg:grid-rows-1 gap-3 lg:mb-0 mb-20">
        <div className="col-span-1 lg:col-span-2 relative">
          <p className="font-primary font-bold text-[2.5rem] uppercase lg:text-start text-center">Members</p>
          <div className="lg:p-0 p-5">
            <p className="lg:text-start text-center lg:mt-10 mt-5 font-figtree text-[22px]">Our success is driven by a talented and passionate team of skilled professionals. We believe in collaborative creativity and teamwork, empowering each member to contribute to our shared vision of excellence.</p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 text-[1.5rem] font-primary font-bold lg:absolute lg:top-1/2 lg:translate-y-1/2 gap-10 lg:gap-0 lg:mt-0 mt-10 lg:w-full w-fit mx-auto">
            <div className="text-center border-b-2 lg:border-b-0 lg:border-r-2 grid place-items-center"><span className="">50+</span><p>Members</p></div>
            <div className="text-center border-b-2 lg:border-b-0 lg:border-r-2 grid place-items-center"><span className="">15+</span><p>Companies</p></div>
            <div className="text-center"><span className="grid place-items-center">100+</span><p>Orders Done</p></div>
          </div>
        </div>
        <div className="pic grid place-items-center">
          <img src="/assets/hangered-clothes.jpg" className="lg:w-full w-[300px]" alt="" />
        </div>
      </div>
      <div className="section-2 info min-h-[80vh] lg:min-h-[60vh] lg:mt-0 mt-5 lg:p-10">
        <p className="font-primary font-bold text-[2.5rem] uppercase lg:text-start text-center">Worked for</p>
        <div className="w-full grid lg:grid-cols-4 lg:grid-rows-2 grid-cols-1 grid-rows-8 gap-5 mt-10 p-8">
          <div className="grid place-items-center">
            <img src="/assets/beulah.png" className="w-fit" alt="" />
          </div>
          <div className="grid place-items-center">
            <img src="/assets/muzungu_sisters.avif" className="w-fit" alt="" />
          </div>
          <div className="grid place-items-center">
            <img src="/assets/scarlett_poppies.png" className="w-fit" alt="" />
          </div>
          <div className="grid place-items-center">
            <img src="/assets/ymc.png" className="w-fit" alt="" />
          </div>
          <div className="grid place-items-center">
            <img src="/assets/house_of_disgrace.avif" className="w-fit" alt="" />
          </div>
          <div className="grid place-items-center">
            <img src="/assets/the_other.avif" className="w-fit bg-black h-fit" alt="" />
          </div>
          <div className="grid place-items-center">
            <img src="/assets/alix_of.svg" className="w-fit bg-black" alt="" />
          </div>
          <div className="grid place-items-center">
            <img src="/assets/oak_meadow.avif" className="w-fit" alt="" />
          </div>
          <div className="grid place-items-center">
            <img src="/assets/flannel.png" className="w-fit" alt="" />
          </div>
          <div className="grid place-items-center">
            <img src="/assets/gorman.png" className="w-fit" alt="" />
          </div>
          <div className="grid place-items-center">
            <img src="/assets/megan_park.png" className="w-fit" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
