import { Link } from 'react-router-dom';
import errorImg from '../../assets/images/error.png';

const ErrorPage = () => {
    return (
        <div>
            <img className='h-[90vh] w-full' src={errorImg} alt="" />
            <Link to="/">
                <button className='btn btn-ghost text-center text-2xl font-bold w-full'>
                    Back to home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;