export default function LearningProccess({category,BackCol,BorderCol,percent}) {
  return (
    <div className='learn'>
      <div className="head-learn">
        <h2>{category}</h2>
        <p>{percent}%</p>
      </div>
        <div className="learn-container" style={{borderColor:BorderCol,boxShadow:"2px 4px 10px rgba(0, 0, 0, 0.3)"}}>
            <div className="learn-percent" style={{background:BackCol,width:`${percent}%`,textAlign:"right"}}>
            </div>
        </div>
    </div>
  )
}