import bistro from '../../src/assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div style={{backgroundImage: `url(${bistro})`}} className="flex justify-center items-center">
            <div className="text-center w-1/2 mx-auto m-20 bg-white p-10 shadow-sm rounded">
                <h3 className='text-3xl font-semibold mb-2'>Bistro Boss</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default BistroBoss;