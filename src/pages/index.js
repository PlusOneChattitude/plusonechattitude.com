import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <div>
                <Helmet title={siteTitle} />

                <section id="koncept" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Koncept</h2>
                            </header>
                        
                            <h3>+1 CHATTITUDE<br />
                            - en Wonderbai mærkesag</h3>
                            
                            <p>Aldrig har det været mere aktuelt og relevant at kæmpe for bedre kommunikation og bedre digital opførsel. På Wonderstream ønsker vi med vores helt egen +1 CHATTITUDE mærkesag at øge folks bevidsthed om, hvordan man behandler hinanden ordentligt på Internet.</p>
                                                        
                            <p>Der er altså ikke tale om, at der skal skabes en masse forbud eller regler 
                            mod at skrive sjove og skøre ting - eller mod f.eks. at bande og bruge sort 
                            humor. Det handler ene alene om, at vi alle skal tale og skrive pænt til 
                            hinanden. Det er de personlige angreb, diskriminationer og nedsættende 
                            kommentarer, vi alle har en forpligtigelse til at reagere i mod.</p>
                            
                            <h3>VI HAR DET ALLE I OS: DANNELSE, PLI OG HØFLIGHED</h3>
                            
                            <p>Bag skærmen/tasterne er det nemmere at agere hårdere, end 
                            når vi står over for andre mennesker. Vores dannelse og pli 
                            forsvinder, når vi sidder hjemme i trygge rammer.</p>
                            
                            <p>Mange søger bevidst konflikten ved direkte opsøgende provokationer, hvor man helt målrettet går efter at ramme og opildne andre mennesker. Det er negativt, ondskabsfuldt og komplet uacceptabelt. Andre 
                            skriver konsekvent i lummert og perverteret sprog  for at være sjov eller fordi det bare er blevet sådan, man gør. Det kan føles tåkrummende pinligt og direkte anstødeligt. </p>
                            
                            
                            
                            <p>Pointen er, at vi hver især er helt bevidst om, hvordan man møder andre mennesker med respekt face-to face. Vi sidder jo heller ikke bussen og sviner sidemanden til. Husk det, brug det - også online. </p>
                            
                            <h3>HVORDAN TALER DU TIL ANDRE VED MIDDAGSBORDET?</h3>
                            
                            <p>Vi opfordrer folk til at skrive til andre, som hvis man sad overfor dem. Det er tommelfingerregel no.1.; det du ikke ville sige til folk face to face, det skal du afholde dig fra at skrive. Vores intention med +1 CHATTITUDE mærkesagen er, at vi vil bekæmpe enhver form for personligt negativt ladet kommunikation.</p>
                            
                            
                            <p>Dette uanset om det er direkte negativ kommunikation, spontane personangreb eller om det er indirekte søgen efter diskussioner, provokationer, bevidst destruktiv opførsel, regelbrud og trolling.</p>
                            
                            <p>Citat: "Hvis man inderst inde ikke er en sød og flink person, kan man da i det mindste opføre sig som en.  Hvem opdager alligevel forskellen? Det er kun Vorherre, der ser på hensigten.  Vi andre dødelige ser på handlingen." Udtalt af en klog person.</p>
                            
                            <h3>SITUATIONSFORNEMMELSE & EMPATI</h3>
                            
                            <p>Husk på, at du i bund og grund ikke kan vide, hvordan dine ord lander og bliver modtaget. Måske gør du folk kede af det med noget, som DU synes er sjovt - men som de på ingen måde finder sjovt.</p>

                            <p>Sarkasme og ironi er en konstant balancegang og kan præge omgivelserne negativt, fordi begge dele kan opfattes meget forskelligt. Især uden face-to-face kontakt. Det kan virke nedgørende eller sårende, uden at man måske tænker over det. På samme måde kan skældsord og drillerier også opfattes mere alvorligt, end de er ment.</p>
                            
                            <p>Du tror måske, at andre finder det sjovt, når du skriver noget i sarkasme eller ironi. Men du kan ikke vide det, hvordan andre modtager det. </p>
                            
                            <h3>HOLD DEN GODE TONE - ELLER TI HELLERE STILLE</h3>
                            
                            <p>En dårlig omgangstone giver dårlig stemning i et fællesskab. Det kan gøre det vanskeligt at samarbejde og tale konstruktivt med hinanden. Det kan også føre til konflikter og sågar mobning.</p>
                            
                        
                        
                            </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Lorem ipsum dolor adipiscing<br />
                                amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Lorem ipsum dolor adipiscing<br />
                                amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                            <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Adipiscing amet consequat</h2>
                            </header>
                            <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Ipsum feugiat consequat?</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

Homepage.propTypes = {
    route: React.PropTypes.object
};

export default Homepage;

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;