import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer}
          width={773}
          height={687}
          className="object-contain"/>
      </div>
      <div className="flex flex-1 flex-col">
        <h1 className="text-4xl capitalize font-palanquin font-bold"><span className="text-coral-red">Special</span> Offer</h1>
        <p className="lg:max-w-lg mt-4 info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="lg:max-w-lg mt-4 info-text">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label="Shop now" iconURL={arrowRight}
                  textColor="text=white"/>
          <Button label="Learn more" 
                  backgroundColor="bg-white"
                  borderColor="border-slate-gray" 
                  textColor="text-gray-500"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer