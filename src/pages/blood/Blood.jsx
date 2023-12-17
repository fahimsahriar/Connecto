import BloodPost from '../../components/bloodPost/BloodPost.jsx'
import BloodHeading from '../../components/blood_heading/BloodHeading.jsx';
import Share from '../../components/share/Share';
import './blood.scss'

function Blood() {
  return (
    <div className='home'>
      <BloodHeading />
      <Share blood={true} />
      <BloodPost />
    </div>
  )
}

export default Blood;