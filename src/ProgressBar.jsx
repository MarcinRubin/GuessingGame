const ProgressBar = ({roundsCounter}) => {
  const progressArray = new Array(roundsCounter).fill(0);
  return (
    <div className="progress-bar-wrapper"  style = {{"--len": roundsCounter}} >
      {progressArray.map((item, i) =>(
        <div key = {i}></div>
      )
      )}
    </div>
  )
}

export default ProgressBar