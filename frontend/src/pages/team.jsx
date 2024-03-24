import Header from "../components/header";
import Footer from "../components/footer";

export default function Team() {
    return (
        <>
            <Header/>
            <div className="row">
        <div className="column">
          <div className="card">
            <img src="https://media.licdn.com/dms/image/D4D03AQEukmJGCxca6Q/profile-displayphoto-shrink_200_200/0/1699894052774?e=2147483647&v=beta&t=2bUxIHqUs2EeMHUSAIZ07Qhz1lfI-QDDEKZ7O4Ix3Ag" alt="Nisarg"  className="team_img"/>
            <div className="container">
              <h2>Nisarg Khodke</h2>
              <p>nisargkhodke@gmail.com</p>
              <p><a href="https://in.linkedin.com/in/nisarg-khodke-391158250" target="_main" className="index_nav"><button className="button" >Contact</button></a></p>
            </div>
          </div>
        </div>
      
        <div className="column">
          <div className="card">
            <img src="https://media.licdn.com/dms/image/D4D03AQG7hnKplpFCzw/profile-displayphoto-shrink_200_200/0/1704544154396?e=2147483647&v=beta&t=aXAlokWBjOJFh8jVJfI6ASVrQYd8uQpPRFz7xVUo4yY" alt="Jayesh"  className="team_img" />
            <div className="container">
              <h2>Jayesh Thakkar</h2>
              <p>jayesh.thakkar034@nmims.edu.in</p>
              <p><a href="https://in.linkedin.com/in/jayesh-thakkar-1a953425a" target="_main" className="index_nav"><button className="button" >Contact</button></a></p>
            </div>
          </div>
        </div>

        <div className="column">
            <div className="card">
              <img src="https://media.licdn.com/dms/image/D4D03AQEx6hMH0qhPuw/profile-displayphoto-shrink_200_200/0/1682888024761?e=2147483647&v=beta&t=ZM0u7FTn5YGcjaGdcrdebrPesJrtlwcRqlTjB1jgWf0" alt="Shubham" className="team_img"/>
              <div className="container">
                <h2>Shubham Tanna</h2>
                <p>shubhamjtanna@gmail.com</p>
                <p><a href="https://in.linkedin.com/in/shubhamtanna" target="_main" className="index_nav"><button className="button" >Contact</button></a></p>
              </div>
            </div>
          </div>
      
        <div className="column">
          <div className="card">
            <img src="https://media.licdn.com/dms/image/C4D03AQFstpxIR0jEHA/profile-displayphoto-shrink_800_800/0/1662878576779?e=2147483647&v=beta&t=1kyPNIXPOSHu2O_TUwBbieYsyqFa2zKRsINZ4o6CU64" alt="Niraj" className="team_img"/>
            <div className="container">
              <h2>Niraj Lalani</h2>
              <p>nirajlalani01@gmail.com</p>
              <p><a href="https://in.linkedin.com/in/niraj-lalani" target="_main" className="index_nav"><button className="button" >Contact</button></a></p>
            </div>
          </div>
        </div>
      </div>
            <Footer/>
        </>
    )
}