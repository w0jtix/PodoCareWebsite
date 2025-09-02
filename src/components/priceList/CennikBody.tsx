import CennikContainer from './CennikContainer'

export function CennikBody() {
  return (
    <div className="body-background width-max p-0">
        <div className="body-container flex-column justify-self-center align-items-start height-fit-content">
            <section className="home-body-row height-fit-content width-max flex-column">
                <h1 className="header-h1">Cennik</h1>          
            </section>
            <CennikContainer/>
        </div>  
    </div>
  )
}

export default CennikBody
