import React, {useState} from 'react';
import useStyles from './styles';
import { Card, CardActions, CardHeader, CardContent } from '@material-ui/core';

const Signup = () => {
  const classes = useStyles()


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://localhost:4040/new", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          username: email,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setPassWord("");
        setMessage("Please verify your email and then log in");
      } else {
        setMessage("Some error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  
  return (
      
    <form className={classes.container} onSubmit={handleSubmit} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Create an Account" />
        <CardContent>
          <div className={classes.field}>
            <input
              type="text"
              value={name}
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={classes.field}>
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={classes.field}>
            <input
              type="text"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassWord(e.target.value)}
            />
          </div>
          <div>
              <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree to all the statements in <a href='https://en.wikipedia.org/wiki/Terms_of_service#:~:text=Terms%20of%20service%20(also%20known,to%20use%20the%20offered%20service' target="_blank" rel="noopener noreferrer">terms of service</a></span>.
          </div>
        

        <CardActions>
          <div>
              <button className={classes.subBtn} type="submit">Register</button>
          </div>
          <div className="message">{message ? <p>{message}</p> : null}</div>
          </CardActions>
          </CardContent>
      </Card>
    </form>
  

  )};

export default Signup;
