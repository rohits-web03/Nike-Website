import { services } from "../Constants"
import {ServiceCard} from "../Components"

const Services = () => {
  return (
    <>
    <h2 className="text-4xl p-4 mb-[2rem] font-bold font-palanquin">Our<span className="text-coral-red"> Services</span></h2>
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service)=>(
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
    </>
  )
}

export default Services