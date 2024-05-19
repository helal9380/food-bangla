import Cover from "./Cover";


const MenuCategory = ({items,titel, coverimg}) => {
    console.log(items);
    return (
        
       <div>
        { coverimg && <Cover img={coverimg} title={titel}></Cover>}
         <div className="grid grid-cols-1 max-w-screen-lg mx-auto mt-5 mb-10 md:grid-cols-2 gap-3">
        {
            items.map(item => (
                <div key={item._id}>
                    <div className="flex gap-5">
                        <img style={{borderRadius: '0 100% 100% 100%'}} className="w-[100px]" src={item.image} alt="" />
                        <div>
                        <h3 className="font-semibold my-2 text-xl">{item.name}</h3>
                        <h4>{item.recipe}</h4>
                        </div>
                        <h5 className="text-orange-500">Price {item.price}</h5>
                    </div>
                </div>
            ))
        }
      </div>
       </div>
    );
};

export default MenuCategory;