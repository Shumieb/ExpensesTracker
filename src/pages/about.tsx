import about_img from '../assets/imgs/about_placeholder.jpg'
import about_me_img from '../assets/imgs/about_me.jpg'

const About = () => {
    return (
        <main className="w-[90%] mx-auto min-h-[75vh] py-2 my-5">
            <p className='text-3xl text-center mb-5'>About Us</p>
            <div className="py-2 rounded-lg grid grid-cols-2 gap-4 mb-6">
                <div className='pt-4'>
                    <p className="text-lg text-sky-400">About the site</p>
                    <p className="text-2xl text-sky-900">What we do</p>
                    <p className="text-lg text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam, voluptate numquam accusamus,
                        blanditiis eaque amet laboriosam vel unde ab inventore
                        eligendi porro, enim id ducimus ad dolor recusandae
                        mollitia modi autem quasi maxime voluptas nesciunt explicabo.
                        Dolorem in porro impedit iste delectus cumque? Vitae veritatis
                        voluptatem corrupti consequatur culpa suscipit.
                    </p>
                </div>
                <img src={about_img} alt="about us picture"
                    className='rounded-lg my-2 object-cover grayscale-25 h-70 w-[100%]'
                />
            </div>
            <div className="py-2 rounded-lg grid grid-cols-2 gap-4 mb-2">
                <img src={about_me_img} alt="about us picture"
                    className='rounded-lg my-2 object-cover grayscale-25 h-70 w-[100%]'
                />
                <div className='pt-4'>
                    <p className="text-lg text-sky-400">About the Creater</p>
                    <p className="text-2xl text-sky-900">Who we are</p>
                    <p className="text-lg text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam, voluptate numquam accusamus,
                        blanditiis eaque amet laboriosam vel unde ab inventore
                        eligendi porro, enim id ducimus ad dolor recusandae
                        mollitia modi autem quasi maxime voluptas nesciunt explicabo.
                        Dolorem in porro impedit iste delectus cumque? Vitae veritatis
                        voluptatem corrupti consequatur culpa suscipit.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default About