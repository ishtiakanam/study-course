import partner1 from '../../assets/images/ielts.jpg'
import partner2 from '../../assets/images/wilson.jpg'
import partner3 from '../../assets/images/highschool.jpg'
import partner4 from '../../assets/images/ielts.jpg'
import partner5 from '../../assets/images/wilson.jpg'
import partner6 from '../../assets/images/highschool.jpg'
const Partners = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold my-5 text-center text-sky-500'>Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                <div className='bg-slate-900 rounded-2xl'>
                    <img className='rounded-2xl' src={partner1} alt="" />
                    <h2 className='text-center text-2xl font-bold my-2'>Ielts</h2>
                </div>
                <div className='bg-slate-900 rounded-2xl'>
                    <img className='rounded-2xl' src={partner2} alt="" />
                    <h2 className='text-center text-2xl font-bold my-2'>Wilson School</h2>
                </div>
                <div className='bg-slate-900 rounded-2xl'>
                    <img className='rounded-2xl' src={partner3} alt="" />
                    <h2 className='text-center text-2xl font-bold my-2'>High school</h2>
                </div>
                <div className='bg-slate-900 rounded-2xl'>
                    <img className='rounded-2xl' src={partner4} alt="" />
                    <h2 className='text-center text-2xl font-bold my-2'>Ielts</h2>
                </div>
                <div className='bg-slate-900 rounded-2xl'>
                    <img className='rounded-2xl' src={partner5} alt="" />
                    <h2 className='text-center text-2xl font-bold my-2'>Wilson School</h2>
                </div>
                <div className='bg-slate-900 rounded-2xl'>
                    <img className='rounded-2xl' src={partner6} alt="" />
                    <h2 className='text-center text-2xl font-bold my-2'>High school</h2>
                </div>

            </div>
        </div>
    );
};

export default Partners;