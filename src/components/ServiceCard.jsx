const ServiceCard = ({ cardName, cardSymbol, cardDesc }) => {
    return <div className="service-card border border-[#909090] rounded-md min-h-[250px] lg:h-[300px] p-5 relative">
        <i className={`block text-center text-[1.5rem] lg:text-[2rem] fa-solid fa-${cardSymbol} text-yellow-900`}></i>
        <div className="absolute bottom-14 lg:bottom-20">
            <p className="card-title font-funnelsans text-[1.4rem] lg:text-[1.5rem] text-center mb-7">{cardName}</p>
            <p className="text-center opacity-70 w-[90%]">{cardDesc}</p>
        </div>
    </div>
}

export default ServiceCard