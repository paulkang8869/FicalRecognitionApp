import React from 'react'



const Register = ({ onRouteChange }) => {
    return (
        <article className="br3 ba b--black mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
            <form className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input className="b--black pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b--black b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                    </div>
                </fieldset>
                <div className="mb3">
                    <input
                        onClick={() => onRouteChange('home')}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                        type="submit"
                        value="Register"
                    />
                </div>
            </form>
        </article>
    )

}

export default Register