import Button from "../Button.png"
const Form = () => {
  return (
    <div className="login">
      <form name='form-login' className="form-element">
        <div className="form-container">
        <div className="user-row">
            <span className="fontawesome-user span-icon-element"></span>
            <input type="text" className="login-user-input" placeholder="Потребителско име" required/>
         
        </div>
        <div className="password-row">
            <span className="fontawesome-lock span-icon-element"></span>
            <input type="password" className="login-password-input"placeholder="Парола" required/>
        </div>
      
      
        <div className="btn-holder">
            <input className="login-btn" type="image" src={Button} alt="button-background"/>
        </div>
    </div>

</form>
    </div>
  )
}

export default Form
