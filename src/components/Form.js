import Button from "../Button.png"
import { useState } from "react"
const Form = ( {loginAuth} ) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  return (
    <div className="login">
      <form name='form-login' className="form-element">
        <div className="form-container">
        <div className="user-row">
            <span className="fontawesome-user span-icon-element"></span>
            <input type="text" 
            className="login-user-input" 
            placeholder="Потребителско име" 
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
         
        </div>
        <div className="password-row">
            <span className="fontawesome-lock span-icon-element"></span>
            <input type="password" 
            className="login-password-input"
            placeholder="Парола" 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

        </div>
      
      
        <div className="btn-holder">
            <input className="login-btn" type="image" src={Button} alt="button-background"
            onSubmit={loginAuth(username, password)}
            />
        </div>
    </div>

</form>
    </div>
  )
}

export default Form
