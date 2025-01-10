import React from "react";
import Image from "../image/Image";
import Food from "../Food/Food";
import Video from "../Video/Video";
import Services from "../Services/Services";
import Team from "../Team/Team"
import FeedbackForm from "../Feedback/Feedback";
function Home() {
    return (
        <>
            <div>
                <Image />
                <Food />
                <Video />
                <Services />
                {/* <Team /> */}
                <FeedbackForm />
            </div>
        </>
    )

}
export default Home;