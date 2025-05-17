const TitleBanner = ({ listingTitle }) => {
    return (
      <div className="w-screen bg-white px-2 pt-[0.8rem] border-b border-[#c4c4c4]">
        <h2 className="text-left text-[31px] font-bold text-[rgb(26,26,26)] mx-auto font-lato leading-[34px] tracking-[0.12px] mb-[15px]">
          {listingTitle}
        </h2>
      </div>
    );
  };
  
  export default TitleBanner;
  