import React, {Component, SyntheticEvent} from 'react';
import {cleanup} from "@testing-library/react";
import axios from 'axios';
import {Navigate} from "react-router-dom";

class Register extends Component {
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    password_confirm='';
    state ={
        redirect : false
    }

    submit =async (e:SyntheticEvent) =>{
        e.preventDefault();
       await axios.post('http://localhost:3000/api/register',{
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm,
        });
      this.setState({
         redirect: true
      });
    }
    render() {
        if(this.state.redirect){
            return <Navigate to={'/login'}/>
        }

        return (
            <main className="form-signin">
                <form className="w-50 mt-5 p-3" onSubmit={this.submit}>
                    <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                    <input className="form-control mb-3" placeholder="First Name" required
                           onChange={e => this.first_name = e.target.value}
                    />
                    <input className="form-control mb-3" placeholder="Last Name" required
                           onChange={e => this.last_name = e.target.value}
                    />
                    <input type="email"  className="form-control mb-3" placeholder="Your Email PLease" required
                           onChange={e => this.email = e.target.value}
                    />
                    <input type="password" className="form-control mb-3" placeholder="Your Password" required
                           onChange={e => this.password = e.target.value}
                    />
                    <input type="password" className="form-control mb-3" placeholder="Confirm Password" required
                           onChange={e => this.password_confirm = e.target.value}
                    />
                    <button className=" btn btn-lg btn-primary" type="submit">Submit</button>
                </form>
            </main>
        );
    }
}

export default Register;