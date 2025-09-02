import { Alert } from '../data/alert'


export function CustomAlert (props: Alert) {
  return (
    <div className={`custom-alert custom-alert-${props.variant} flex justify-center align-items-center`}>
        <a className="alert-message flex-grow justify-center">{props.message}</a>
    </div>
  )
}

export default CustomAlert
