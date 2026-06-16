
import LeftSection_SignUp from "../../components/userComponent/Login&SignUpComponent/LeftSection_signUp";
import RightSection_SignUp from "../../components/userComponent/Login&SignUpComponent/RightSection_signUp"
const SignUp = ()=>{
    return(
        <div className="signup-page grid grid-cols-2 h-screen">
            <LeftSection_SignUp />
            <RightSection_SignUp />
        </div>
    )
}
export default SignUp;