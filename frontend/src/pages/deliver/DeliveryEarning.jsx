import DeliveryNav from "../../components/DeliveryNav"

export default function DeliveryEarning(){
    return(
        <div className="w-full h-screen">
            <div className="lg:hidden flex flex-col w-full h-full">
                <div className="bg-pink-500 w-full h-full flex items-center justify-center">
                    <h1>this is Mobile layout</h1>
                </div>
            </div>

            <div className="hidden lg:flex flex-col justify-start items-center w-full h-full">
                <DeliveryNav></DeliveryNav>
                earn
            </div>
        </div>
    )
}