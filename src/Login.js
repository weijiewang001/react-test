import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useEffect, useState } from 'react';

function Login() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  const [disabled, setDisabled] = useState(true)

  const handleUsername = (e) => {
    setUser({
      ...user,
      username: e.target.value
    })
  }

  const handlePassword = (e) => {
    setUser({
      ...user,
      password: e.target.value
    })
  }

  const handleDefault = (e) => {
    e.preventDefault()
  }

  const handleSignIn = () => {
    console.log("submit")
  }
  // useCallback can avoid the same function re-render again
  const handleDisabled = useCallback(() => {
    if (user.username && user.password) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
    console.log("gooood")
  }
    , [user.password, user.username])

  useEffect(() => {
    handleDisabled()
  }, [user.username, user.password, handleDisabled])

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Login
              </div>
              <div className="card-body">
                <form onSubmit={handleDefault}>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name="username" required value={user.username} onChange={handleUsername} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" required value={user.password} onChange={handlePassword} />
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={handleSignIn} disabled={disabled}>Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
