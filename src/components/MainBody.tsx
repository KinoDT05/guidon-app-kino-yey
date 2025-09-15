import './components.css'
import Headline from './Headline.tsx'
import News from './News.tsx'
import Article from './Article.tsx'

function MainBody() {
    return (
        <>
            <div class='main-container'>

                <div class='three-headliner'>

                    <div class="main-headline">
                        <Headline
                            Category="NEWS"
                            Title="Ateneo drafts Sustainable University Master Plan, outlines sustainability goals until 2050"
                            Text="IN LINE with the Ateneo's goal to be a Laudato Si' University, the Ateneo Institute for Sustainability (AIS) has outlined..."
                            Date="SEPTEMBER 3, 2025"
                            ImgUrl="images/news1.jpg"
                            StyleType="mainline"
                        ></Headline>
                    </div>
                    <div class="side-headline">
                        <Headline
                            Category="NEWS"
                            Title="Ateneo enhances campus security measures with new RFID system rollout and CCTV installation"
                            Text="IN LINE with the Ateneo's goal to be a Laudato Si' University, the Ateneo Institute for Sustainability (AIS) has outlined..."
                            Date="SEPTEMBER 1, 2025"
                            ImgUrl="images/news2.jpg"
                            StyleType="sideline"
                        ></Headline>
                        <Headline
                            Category="NEWS"
                            Title="Gonzaga cafeteria reopens with Kitchen City and The Varda Group as new main concessionaires"
                            Text="IN LINE with the Ateneo's goal to be a Laudato Si' University, the Ateneo Institute for Sustainability (AIS) has outlined..."
                            Date="AUGUST 29, 2025"
                            ImgUrl="images/news3.jpg"
                            StyleType="sideline"
                        ></Headline>
                    </div>
                </div>

                <hr class ='section-break'></hr>

                <div class='news-articles'>
                    <div class='news-part'>
                        <p class='head'>Latest
                            <hr></hr>  
                        </p>
                        <p>
                            <News
                                Title="Ateneo drafts Sustainable University Master Plan, outlines sustainability goals until 2050"
                                Text="IN LINE with the Ateneo's goal to be a Laudato Si' University, the Ateneo Institute for Sustainability (AIS) has outlined..."
                                Date="SEPTEMBER 3, 2025"
                                ImgUrl="images/news1.jpg"
                            ></News>
                            <hr></hr>
                        </p>

                        <p>
                            <News
                                Title="Ateneo enhances campus security measures with new RFID system rollout and CCTV installation"
                                Text="TO REINFORCE campus security, the Ateneo has begun implementing a Radio-Frequency Identification (RFID) access system since July 21, while also..."
                                Date="SEPTEMBER 1, 2025"
                                ImgUrl="images/news2.jpg"
                            ></News>
                            <hr></hr>
                        </p>

                        <p>
                            <News
                                Title="Gonzaga cafeteria reopens with Kitchen City and The Varda Group as new main concessionaires"
                                Text="THE GONZAGA Cafeteria fully reopened both floors of the dining area last August 5, officially introducing Kitchen City and The..."
                                Date="AUGUST 29, 2025"
                                ImgUrl="images/news3.jpg"
                            ></News>
                            <hr></hr>
                        </p>

                        <p>
                            <News
                                Title="Sanggunian passes SAGISAG Act to address leadership gap as presidential post remains vacant"
                                Text="TO ADDRESS leadership position gaps in student government, the Sanggunian school and sector representatives passed the Sanggunian Action on Governance..."
                                Date="AUGUST 26, 2025"
                                ImgUrl="images/news4.jpg"
                            ></News>
                            <hr></hr>
                        </p>

                        <p>
                            <News
                                Title="Asian women journalists advocate for media freedom, call for safer newsrooms at ACFJ Conference"
                                Text="ADVOCATING SAFER spaces for women journalists, the Asian Center for Journalism at Ateneo (ACFJ), together with the Embassy of the..."
                                Date="AUGUST 11, 2025"
                                ImgUrl="images/news5.jpg"
                            ></News>
                            <hr></hr>
                        </p>

                        <div class='LoadMore'>
                            <button>Load More Articles</button>
                        </div>

                    </div>
                    <div class='article-part'>
                        <p class='head'>Articles
                            <hr></hr>
                        </p>

                        <p>
                            <Article
                                Title="Ateneo returns to Blue Eagle Gym for 2025 Cheer Rally"
                                Date="SEPTEMBER 12, 2025"
                                Number="01"
                            ></Article>
                        </p>

                        <p>
                            <Article
                                Title="Ateneo Blue Eagles exit V-League Collegiate Challenge with four-set defeat against FEU"
                                Date="SEPTEMBER 10, 2025"
                                Number="02"
                            ></Article>
                        </p>

                        <p>
                            <Article
                                Title="How far down the hill? Assessing engagement in formation programs "
                                Date="SEPTEMBER 8, 2025"
                                Number="03"
                            ></Article>
                        </p>

                        <p>
                            <Article
                                Title="ICYMI: Blue Eagles nab 2025 PIBC title after Battle of Katipunan thriller "
                                Date="SEPTEMBER 8, 2025"
                                Number="04"
                            ></Article>
                        </p>

                        <p>
                            <Article
                                Title="Blue Eagles keep semis bid alive with commanding sweep over Chiefs "
                                Date="SEPTEMBER 7, 2025"
                                Number="05"
                            ></Article>
                        </p>

                    </div>
                </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>

            <div class='inquiry'>
                <div class='main-containter'>
                    <div class='grey-area'>
                        <div class='feedback'>
                            <h2>Tell us what you think!</h2>
                            <p>Have any questions, clarifications, or comments? Send us a message through the form below.</p>
                            <p>Email Address</p>
                            <textarea class="email-input" placeholder=" "></textarea>
                            <p>Message</p>
                            <textarea class="message-input"></textarea>
                        </div>
                        <div class='take-the-lede'>
                            <h2>Tell us what you think!</h2>
                            <p>Have any questions, clarifications, or comments? Send us a message through the form below.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class='footer'>
                <br></br>
                <br></br>
                <br></br>
            </div>

        </>
    )
}

export default MainBody