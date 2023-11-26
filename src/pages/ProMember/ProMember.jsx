import ProMemberBanner from "../../components/ProMemberBanner/ProMemberBanner";
import Payment from "./Payment";


const ProMember = () => {
    return(
        <div>
             {/* banner */}
             <ProMemberBanner/>
             {/* Stripe form */}
             <Payment/>
        </div>
    )}
export default ProMember;