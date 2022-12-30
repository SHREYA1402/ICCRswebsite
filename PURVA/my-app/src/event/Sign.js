import './Sign.css';
function Signin() {
    return (
        <>

            <button onclick="document.getElementById('id01').style.display='block'" style={{width:"auto"}}>Login</button>

            <div id="id01" className="modal">

                <form className="modal-content animate" action="/action_page.php" method="post">
                    <div className="imgcontainer">
                        <span onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">&times;</span>

                    </div>

                    <div className="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" /> <p>Remember me</p>
                        </label>
                    </div>

                    <div className="container" style={{backgroundColor:"#f1f1f1"}} >
                        <button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot <a href="/">password?</a></span>
                    </div>


                </form>
            </div>




        </>



    );
}

export default Signin;