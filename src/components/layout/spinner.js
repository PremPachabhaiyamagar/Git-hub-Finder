import React,{Fragment} from 'react'
import Spinner from './spinner.gif'
const spinner = () => <Fragment>
      <img src={Spinner} alt = 'loading ...' style={{display : 'block' ,margin :'auto',width : '200px'}} ></img>
    </Fragment>
export default spinner
