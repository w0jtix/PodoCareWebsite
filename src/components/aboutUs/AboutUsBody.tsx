import IntroduceCards from './IntroduceCards'
import BrandAdvantages from './BrandAdvantages'
import Testimonials from './Testimonials'

export function ONasBody () {
  return (
    <div className="body-background width-max p-0">
        <div className="body-container flex-column justify-self-center align-items-start height-fit-content">
            <section className="home-body-row height-fit-content width-max flex-column">
                <h1 className="header-h1">Nasz zespół</h1>
                <IntroduceCards/>              
            </section>
            <BrandAdvantages />
            <section className="testimonials-section flex-column width-max height-fit-content">
              <h1 className="header-h1">Opinie naszych klientów</h1>
              <Testimonials />
            </section>
        </div>  
    </div>
  )
}

export default ONasBody
