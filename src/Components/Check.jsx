import SectionTitle from "./SectionTitle";
import feature from '../../src/assets/home/featured.jpg'

const Check = () => {
    return (
        <div className="bg-fixed p-20" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${feature})`, backgroundPosition: 'center', backgroundSize: 'cover',}}>
            <SectionTitle heading={'---Check it out---'} subHeading={'FROM OUR MENU'}></SectionTitle>
            <div className="flex items-center mt-4 gap-5">
                <div>
                    <img src={feature} alt="" />
                </div>
                <div className="text-white">
                    <h3 >March 20, 2023</h3>
                    <h2 className="text-2xl font-semibold my-2">WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline  border-0 text-white border-b-2 mt-2">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Check;