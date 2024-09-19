import Input from './Input.jsx';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import { useInput } from '../hooks/useInput.jsx';

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handeleEmailBlur,
    hasError: emailHasError
  } = useInput('', (value) => { return isEmail(value) && isNotEmpty(value) });

  const { 
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput('', (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
   
    if (emailHasError || passwordHasError) {
      return;
    }

    console.log(emailValue, passwordValue);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handeleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && 'Please enter a valid email!'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError &&  'Please enter a valid password.'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
