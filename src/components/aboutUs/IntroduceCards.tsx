import { employeeData } from '../../data/texts'

const IntroduceCards = () => {
  return (
    <div className="introduce-cards-container flex justify-center align-items-center">
      {employeeData.map((employee, index) => (
        <div key={index} className="introduce-container relative pointer">
          <img 
            className="introduce-image width-max height-max" 
            src={employee.img.src} 
            alt={employee.img.alt}
          />

          <div className="introduce-shadow-top absolute width-max"></div>
          <div className="introduce-shadow-bottom absolute width-max"></div>
          
          <h3 className="introduce-title absolute m-0">{employee.name}</h3>
          
          <div className="introduce-content absolute">
            <p className="introduce-text m-0 text-align-left">{employee.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default IntroduceCards
