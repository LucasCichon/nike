import {shoe8} from '../assets/images'
import Button from '../components/Button'

const SuperQuality = () => {
  return (
    <section id="about-us" className="container flex justify-between items-center w-full max-lg:flex-col gap-10 max-container">
      <div className="flex flex-1 flex-col">
        <h1 className="text-4xl capitalize font-palanquin font-bold">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h1>
        <p className="lg:max-w-lg mt-4 info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="lg:max-w-lg mt-4 info-text">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className='mt-11'>
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-cente items-center">
        <img src={shoe8} 
             alt="shoe8"
             width={570}
             height={522}
             className='object-contain' />
      </div>
    </section>  )
}

export default SuperQuality