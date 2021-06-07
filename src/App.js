import React, { useState, useEffect } from 'react';
import './App.css';
import BackgroundMusic from './components/BackgroundMusic';
import AOS from "aos";
import "aos/dist/aos.css";
import victims from './resources/victims.jpg'
import zSketch from './resources/history.jpg'
import proof1 from './resources/proof1.png'
import proof2 from './resources/proof2.png'
import proof3 from './resources/proof3.png'
import future1 from './resources/future1.jpg'
import thezodiac from './resources/thezodiac.png'
import eric from './resources/eric.jpg'
import shirt from './resources/shirt.png'
import retard from './resources/retard.jpg'

function App() {
  const [isPlaying, setPlaying] = useState(false);
  const [timed, setTimed] = useState(false)
  const [render, setRender] = useState("home")
  const [change, setChange] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration : 1000,
      once: true
    });
  }, []);

  useEffect(() => {
    let mounted = true;
    if (mounted && render === "home") {
      setLoading(true)
      setTimeout(() => {
        document.getElementById("title").style.animation = "textflickerC .3s ease-in-out";
        document.getElementById("title").style.letterSpacing = "55px";
        setTimeout(() => {
          document.getElementById("title").style.fontFamily = "arial";
          setLoading(false) 
        }, 300)
       }, 2300)
    }
   return () => {
    mounted = false;
   }
  }, [render])

  useEffect(() => {
    if (isPlaying) {
      <BackgroundMusic isPlaying={isPlaying}/>
    }
  }, [isPlaying])

  useEffect(() => {
    if(timed) {
      setTimeout(() => {setPlaying(true)}, Math.random() * 10000)
    }
  }, [timed])

  let content = (
    <div className="app" onClick={() => timed ? null : null} >
      {render === "home" ?
        <div className="homeBG">
        <div className="titleCon">
          <div className="title" id="title">
            Eric Anderson
          </div>
        </div>
        <div className="tabCon">
          <div className="bubble" style={{ marginLeft: "20%" }} data-aos="fade-right">Who is The Zodiac?</div>
          <div className="bubble" style={{ marginRight: "20%" }} data-aos="fade-left">Who is Eric Anderson?</div>
        </div>
        <div className="mainCon">
          <div className="bubble" style={{ fontSize: "36px", letterSpacing: "30px" }} data-aos="fade-up">The Truth Awaits</div>
          <div className="displayCon">
            <div className="display" onClick={() => loading ? null : setRender("history")} data-aos="fade-right">The<br />Past</div>
            <div className="display" onClick={() => loading ? null : setRender("present")} data-aos="fade-up" data-aos-duration="1800">The<br />Present</div>
            <div className="display" onClick={() => loading ? null : setRender("future")} data-aos="fade-left" data-aos-duration="1500">The<br />Future</div>
          </div>
        </div>
      </div> 
      :
      null
      }
      {render === "history" ? 
        <div className="historyCon">
          <div className="historyTitle">
            <div className="historyLabel">History of the Zodiac</div>
            <div className="historyReturn" onClick={() => setRender("home")}>Return to Menu</div>
            <div className="historyMain">
              <div className="historyText" style={{marginTop: "50px"}}>
              The Zodiac was a serial killer who operated in the the 1960s and the early 1970s who was responsible for the deaths of 5 people
              with further claims of up to 36 total victims (The confirmed victims depicted below). During the time of his activities the Zodiac was an elusive figure leaving no 
              evidence except for a few ciphers left behind each crime scene. The messagse were difficult for even the brightest minds and decryption
              specialists to crack with the final cypher of the Zodiac still being unsolved to this day. 
              </div>
              <img className="historyImg" alt="" src={victims} />
              <div className="historyText" style={{marginTop: "50px"}}>
                The few that were lucky enough to survive the Zodiac have described the his physical appearance which is represented in the picture below. 
              </div>
              <img className="historyImg" style={{width: "200px"}} alt="" src={zSketch} />
              <div className="historyText" style={{marginTop: "50px"}}>And here are the ciphers left behind that puzzled the brightest minds for years down the line.</div>
              <img className="historyImg" style={{width: "800px", marginBottom: "0px"}} alt="" src={"https://www.history.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAwMDI2MTcxMTAz/image-placeholder-title.webp"} />
              <div className="historyText" style={{fontSize: "12px", marginTop: "0px"}}>
                This was the Zodiac's first cipher roughly translated to "I like killing people because it is so much fun it is more fun than killing wild game in the forest",
                where he refers to humans as "the most dangerous animal".
              </div>
              <img className="historyImg" style={{width: "800px", marginBottom: "0px"}} alt="" src={"https://www.history.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1116/MTU3ODc4NjAwMDI3OTQwNTc1/image-placeholder-title.webp"} />
              <div className="historyText" style={{fontSize: "12px", marginTop: "0px"}}>
                This was the Zodiac's second cipher where he claims that there are many imposters and that he is the only true Zodiac". This particular cipher was not solved until recenltly in the year 2020
                and only thanks to advanced machine learning algorithms.
              </div>
              <img className="historyImg" style={{width: "800px", marginBottom: "0px"}} alt="" src={"https://www.history.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAwMDI1NTgxMjc5/image-placeholder-title.webp"} />
              <div className="historyText" style={{fontSize: "12px", marginTop: "0px"}}>
                This was the Zodiac's third cipher where he taunts police and claims a bomb threat on a school.
              </div>
              <img className="historyImg" style={{width: "800px", marginBottom: "0px"}} alt="" src={"https://www.history.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_936/MTU3ODc4NjAwMDI1OTc0NDk1/image-placeholder-title.webp"} />
              <div className="historyText" style={{fontSize: "12px", marginTop: "0px", marginBottom: "50px"}}>
                This was the Zodiac's final cypher where he points to Mt. Diablo. But why? Why did the Zodiac point to this particular mountain? Can you solve this mystery?
              </div>
            </div>
            <div id="foglayer_01" className="fog">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
            <div id="foglayer_02" className="fog">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
            <div id="foglayer_03" className="fog">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
          </div>
        </div>
      :
        null
      }
      {render === "present" ? 
        <div className="historyCon">
          <div className="historyTitle">
            <div className="historyLabel">The Current Mysteries</div>
            <div className="historyReturn" onClick={() => setRender("home")}>Return to Menu</div>
            <div className="historyMain">
              <div className="historyText" style={{marginTop: "50px"}}>
                So at this point you're probably asking, "So what does all this have to do with Eric Anderson?". Well, this story starts with a young man named Shaun King.
              </div>
              <img className="historyImg" alt="" src={proof1} style={{width: "400px"}}/>
              <div className="historyText" style={{marginTop: "20px"}}>
                Shaun King was a close relative of Eric Anderson that had begun to recognize some of Eric's strange behaviors in the early 2020's. Whether it was a family gathering or a night
                out with the boys, Shaun always felt ill intent resonating from Eric. Family members and friends would go missing every outing and Shaun noticed that there was always one constant
                in each of these events; Eric. In March 3rd of 2021, when the Shaun's boyfriend went missing after a white boy summer's day out at Miami, Shaun had enough and posted a tweet that he,
                unkowingly, would not live to regret.   
              </div>
              <img className="historyImg" style={{width: "400px"}} alt="" src={proof2} />
              <div className="historyText" style={{marginTop: "20px"}}>In the tweet depicted above, Eric is called a killer with a hard R which drew the eyes of people all around the world. Within minutes the tweet
              garnished over 666k retweets and 420k likes. But when the numbers grew dankest all fell silent.</div>
              <img className="historyImg" style={{width: "600px", marginBottom: "0px"}} alt="" src={proof3} />
              <div className="historyText" style={{marginTop: "20px"}}>
                This was the last time people ever heard from Shaun and the world without a messenger had forgotten the lessons that were to be held.
              </div>
              <div className="historyText" style={{marginTop: "50px", marginBottom: "50px"}}>
                Now, I'm sure most of you noticed that no action was taken until Shaun's tweet reached 666k retweets but what is the siginificance behind this number? In the previous
                section where we discussed the history of the Zodiac, we shed light on his final unsolved cipher which pointed to Mt. Diablo. 666 retweets, The number of the beast. Mt. Diablo, the spanish
                translation for the devil. Eric, a name of Scandinavian origin that means "Always Ruler". Anderson, the name used by Neo in the hit movie, The Matrix, before he realized he was "The One".
                Now, if you are feeling a crushing sense of religious terror and existential dread from this turn of events, do not be alarmed. This only indicated that you are still sane.
                The future as we know it is in peril and we will discuss the implications of this new found information in the next section.
              </div>
            </div>
            <div id="foglayer_01" className="fog">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
            <div id="foglayer_02" className="fog">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
            <div id="foglayer_03" className="fog">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
          </div>
        </div>
      :
        null
      }
      {render === "future" ? 
        <div className="historyCon">
          <div className="historyTitle">
            <div className="historyLabel">Revelations</div>
            <div className="historyReturn" onClick={() => setRender("home")}>Return to Menu</div>
            <div className="historyMain">
              <div className="historyText" style={{marginTop: "50px"}}>
                In the book of Revelations, the end of time is described as not a sudden event but a struggle between the forces of good and evil in which evil slowly gathers strength in time to
                overtake the Earth. In the age of man, as technology increased, we grew closer and the burden of life began to ease. Thanks to the work of Mark Zuckerberg, we were introduced
                to an idea called a social network and with this idea, people from all around the world could express their opinions and connect at a level never seen before.
              </div>
              <img className="historyImg" alt="" src={future1} style={{width: "400px"}}/>
              <div className="historyText" style={{marginTop: "20px"}}>
                Zuckerberg was viewed as a saint and modern day savior of the world but those who don't die a hero live long enough to see themselves become the villain. As we mentioned before, when Shaun King
                was killed so blatantly by Eric not only did his voice disappear from the face of the Earth but Eric, somehow, was able to delete the original tweet that Shaun had made. Forever
                keeping the his true identity in the dark. How is this possible?
                Does Eric have connections that stem all the way to some of the most powerful corporate elites in America? 
              </div>
              <img className="historyImg" style={{width: "400px"}} alt="" src={eric} />
              <div className="historyText" style={{marginTop: "20px"}}>
                The picture above is the man known as Eric Anderson. He was born on the 12th of Decemeber which would make him a Sagittarius. This particular Zodiac sign describes anyone that falls within
                it as generous and idealistic, traits that are associated with anyone that could be described as a "savior". The same sign that the messiah of the christian faith falls under. In the book of Revelations, the anti-christ, the bringer of the end, was described 
                as someone who would reveal himself to humanity as a savior in order to control and manipulate the mass from within. Now, another point that must be menitioned is that Eric, The "Always Ruler", has 
                Scandinavian roots. In Scandinavian culture December 12th falls on the 6.66th degree of Sagittarius which ties to the runestone of Isa. This stone promotes strength and ego and falls under the element of primal ice, also
                represented as eternity. Always Ruler, primal ice; Is Eric Anderson immortal? 
              </div>
              <img className="historyImg" style={{width: "600px", marginBottom: "0px"}} alt="" src={thezodiac} />
              <div className="historyText" style={{marginTop: "20px"}}>
                So how, does this all tie in to the Zodiac? Well, if we compile all the information we have gathered thus far, we can assume that Eric has connections that stem to the deepest reaches
                of the human hierarchy. Something that could not have been established within a single life time. Eric is potentially an immortal whos behavior parallels that of the once rampant killer known as The Zodiac.
                With this in mind, the book of Revelations predicts that the anti-christ would be born in the south east quadrant. Many researchers assume that this is a reference to Asia and that the anti-christ
                would be of asian decent. This notion must be rejected as in the final cipher of the Zodiac the compass that points south displays 3 and the east displays 6. 3,6.. 6 6 6. The number of the beast. The Mountain which
                the beast resides. Mt. Diablo. The Zodiac was not taunting the law with these ciphers. He was taunting man-kind. At this point, with the control that Eric has over the media and social networks, controlling
                the minds of the masses, the war is already over. The end has begun and at the center lies Eric in the revelations of mankind. "What can I do to stop this?". Nothing. Pray and hope you never meet Eric Anderson in passing. 
              </div>
              <img className="historyImg" style={{width: "300px", marginBottom: "0px", cursor: "pointer"}} onClick={() => setChange(!change)} alt="" src={change ? shirt : retard} />
              <div className="historyText" style={{marginTop: "20px", marginBottom: "50px"}}>
                Thank you for joining us on this journey to uncover the truth behind the Zodiac Killer. Please feel free to show support by clicking the picture above to buy a "Eric Anderson is the Zodiac Killer" shirt.
              </div>
            </div>
            <div id="foglayer_01" className="fog">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
            <div id="foglayer_02" className="fog">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
            <div id="foglayer_03" className="fog">
              <div className="image01"></div>
              <div className="image02"></div>
            </div>
          </div>
        </div>
      :
        null
      }
    </div>
  )

  return content;

}

export default App;
