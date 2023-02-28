import Badges from './Badges'
import Button from './Button'
import SummaryHeader from './SummaryHeader'

const RightSide = () => {
  return (
    <div className='right-side-container w-1/3 h-2/4 flex flex-col relative p-2'>
        <SummaryHeader/>
        <Badges/>
        <Button/>
    </div>
  )
}

export default RightSide