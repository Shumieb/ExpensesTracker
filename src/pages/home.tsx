import { Link } from 'react-router'
import about_img from '../assets/imgs/about_placeholder.jpg'
const Home = () => {
    return (
        <main className="min-h-[80vh] py-6">
            <div className='w-[90%] mx-auto'>
                <div className='grid grid-cols-2 gap-5 rounded-lg'>
                    <div className='flex flex-col justify-center w-[80%] mx-auto'>
                        <p className='text-xl text-sky-400'>Hello! Welcome to the</p>
                        <p className='text-3xl mb-2 text-sky-900'>Expenses Tracker App</p>
                        <p className='text-lg text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Esse culpa repudiandae maxime doloribus alias error
                            sunt in quos asperiores iusto!
                        </p>
                        <Link to={"/sign-in"}
                            className='mt-5 bg-sky-900 text-center w-[30%] text-white text-xl py-3 px-6 rounded-lg cursor-pointer shadow-md hover:shadow-xl'
                        >Get Started</Link>

                    </div>
                    <div className='rounded-lg'>
                        <img src={about_img} alt="landing page"
                            className='rounded-lg object-cover grayscale-25'
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home