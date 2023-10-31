import {ProgressBar} from 'react-loader-spinner'

const Loading = () => {
    return (
        <ProgressBar
  height="15rem"
  width="100%"
  ariaLabel="progress-bar-loading"
  barColor='#212529'
  borderColor='#212529'
  wrapperStyle={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}

/>
        
    )
}

export default Loading