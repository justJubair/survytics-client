import { Helmet } from "react-helmet-async";
import ProMemberBanner from "../../components/ProMemberBanner/ProMemberBanner";
import Payment from "./Payment";


const ProMember = () => {
    return(
        <div>
             <Helmet>
        <title>Survytics | Pro Member</title>
      </Helmet>
             {/* banner */}
             <ProMemberBanner/>
             {/* Stripe form */}
             <Payment/>
        </div>
    )}
export default ProMember;