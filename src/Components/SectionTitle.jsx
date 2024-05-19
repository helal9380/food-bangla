
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center my-10">
            <h2 className="text-[#D99904] font-semibold">{heading}</h2>
            <h2 className="text-xl">{subHeading}</h2>
        </div>
    );
};

export default SectionTitle;