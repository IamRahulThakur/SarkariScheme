export default function About() {
    return (
        <>
    <div className="flex justify-center p-14 gap-7">
        <div className="w-1/2">
            <h1 className="text-4xl text-green-700 font-semibold">About</h1>
            <h2 className="text-xl mt-4">
                SarkariScheme is a  Platform that aims to offer one-stop search
                and discovery of the Government schemes.
                <br />
                <span className="block mt-4">
                    It provides an innovative, technology-based solution to discover 
                    scheme information based upon the eligibility of the citizen.
                </span>
                <br />
                <span className="block mt-4">
                    The platform helps the citizen to find the right Government schemes 
                    for them. It also guides on how to apply for different Government schemes.
                </span>
            </h2>
        </div>

        <div className="flex justify-center items-center">
            <img src="https://www.shutterstock.com/shutterstock/photos/1745285909/display_1500/stock-photo-katni-madhya-pradesh-india-may-sukanya-samriddhi-scheme-yojana-account-government-1745285909.jpg" 
                alt="image" 
                className="h-80 rounded-lg shadow-lg"
            />
        </div>
    </div>
</>

    )
}