import Description from './Description'
import Result from './Result'
import Score from './Score'
import ScoreHeader from './ScoreHeader'

const LeftSide = () => {
  return (
    <div className='left-side-container w-1/3 h-2/4 flex justify-center items-center flex-col relative p-2'>
      <ScoreHeader />
      <Score />
      <Result />
      <Description />
    </div>
  )
}

export default LeftSide;