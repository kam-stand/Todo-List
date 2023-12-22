export default function Signup() {
    
    return (
        <>
            <form className="signup_page">
                <div>
                    <label>Username</label>
                    <input type="text" placeholder="Enter your usernmae"></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="Enter your Email"></input>
                </div><div>
                    <label>Password</label>
                    <input type="text" placeholder="Enter your password"></input>
                </div>
                <div>
                    <label>Verify Password</label>
                    <input type="text" placeholder="Make sure password is the same"></input>
                </div>
                <div>
                    <button>Signup</button>
                </div>

            </form>

        </>
    )
}