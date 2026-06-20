import LeftSection_SignUp from "../../components/userComponent/Login&SignUpComponent/LeftSection_signUp";
import RightSection_SignUp from "../../components/userComponent/Login&SignUpComponent/RightSection_signUp"
const AuthSignUp = ()=>{
    return(
        <div className="signup-page grid grid-cols-2 w-4/5 justify-center ml-35 mt-5 h-170 rounded-2xl shadow-2xl">
            <LeftSection_SignUp />
            <RightSection_SignUp />
        </div>
    )
}
export default AuthSignUp;