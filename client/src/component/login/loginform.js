export default function LoginForm(){
    return(
        <>
        <form>
            <div>
            <label>Username</label>
            <input type="text" placeholder="username"></input>
            </div>
            <div>
            <label>Password</label>
            <input type="text" placeholder="password"></input>
            </div>
            <p>Forgot Password?</p>
        </form>
        </>
    )
}