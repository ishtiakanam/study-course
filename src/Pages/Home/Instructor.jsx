import instructor1 from '../../assets/images/instructor1.jpeg'
import instructor2 from '../../assets/images/instructor2.jpg'
import instructor4 from '../../assets/images/instructor4.jpeg'
// import instructor3 from '../../assets/images/instructor3.jpg'
const Instructor = () => {
    return (
        <div>
            <div className="text-center my-10">
                <h1>Instructor</h1>
                <h1 className="text-3xl font-bold text-sky-500">Our Professional Instructor</h1>
            </div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* 1 */}
                <div className="card h-[450px] card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src={instructor1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Tuhin Sir</h2>
                    </div>
                </div>
                {/* 2 */}
                <div className="card h-[450px] card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src={instructor2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Tanvir Sir</h2>
                    </div>
                </div>
                {/* 3 */}
                <div className="card h-[450px] card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src={instructor4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Ovi Sir</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;