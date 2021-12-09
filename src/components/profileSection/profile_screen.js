import React from "react";
import "./st_profile.css";

const ProfileScreen = () => {
    return <div className="bodyColor">
        <div id="header" className="primary-colors">
            <div className="profile-pic"></div>
            <div className="profile-summary">
                <h1>Ashish Kumar Madheshiya</h1>
                Inquisitive, energetic computer science specialist skilled in leadership, with a strong foundation in
                math, logic, and cross-platform coding. Seeking to leverage solid skills in collaboration,
                communication,
                and development as a programmer for Google
            </div>
        </div>

        <div id="contacts" className="secondary-colors">
            <a href="tel:+91-98XXXXXXXX">
                <i className="fas fa-mobile-alt"></i>8448430536
            </a>
            <a href="mailto:johnbaba@email.com">
                <i className="fas fa-envelope"></i>ashishmadheshiya7301@email.com
            </a>
            <a href="https://goo.gl/maps/F4Qbx8bWLpbYomkm8" target="_blank">
                <i className="fas fa-map-marker-alt"></i>Dhanewa Dhanei, Maharajganj
            </a>
        </div>

        <div id="main">
            <div className="long-details">
                <h3 className="primary-colors section-head">
                    <i className="fas fa-graduation-cap"></i> Education
                </h3>
                <table className="timeline">
                    <tr>
                        <td className="time">2015 - 16</td>
                        <td className="event">
                            10th, ICSE, <br/> 91%
                        </td>
                    </tr>
                    <tr>
                        <td className="time">2018 - 19</td>
                        <td className="event">
                            12th, CBSE, <br/> 70%
                        </td>
                    </tr>
                    <tr>
                        <td className="time">Expected to graduate in 2023</td>
                        <td className="event">
                            B.Tech in CSE, <br/>
                        </td>
                    </tr>
                </table>

                <h3 className="primary-colors section-head">
                    <i className="fas fa-business-time"></i> Experience
                </h3>
               {/* <table class="timeline">
                  <tr>
                    <td class="time">2015 - 17</td>
                    <td class="event">
                      Software Developer, Kaituna Systems, Massachusetts,
                      <ul class="circle-bullet">
                        <li>
                          Responsible for daily development in a mid-sized customer service firm,
                        </li>
                        <li>
                          Led trace team for implementing the use of Extended Events on SQL Server
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td class="time">2012 - 15</td>
                    <td class="event">
                      Freelance Software Developer,
                      <ul class="circle-bullet">
                        <li>
                          Created a working T-shirt sales website with PHP, JavaScript, HTML, CSS, and MailChimp. Built and maintained a working customer database
                        </li>
                        <li>
                          Updated mobile site for WannaBeRichRich.com to meet new Google mobile first quality standards
                        </li>
                      </ul>
                    </td>
                  </tr>
                </table> */}

                <h3 className="primary-colors section-head">
                    <i className="fas fa-drafting-compass"></i> Projects
                </h3>
                {/* <!-- <table class="timeline">
                  <tr>
                    <td class="time">Jan - Mar, 2017</td>
                    <td class="event">
                      River Gauge,
                      <ul class="circle-bullet">
                        <li>
                          Built a working river gauge from a culvert-mounted laser and Raspberry Pi,
                        </li>
                        <li>
                          Wrote software for the page in Python
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td class="time">Apr - July, 2015</td>
                    <td class="event">
                      Freelance Software Developer,
                      <ul class="circle-bullet">
                        <li>
                          Designed multiplayer labyrinth and puzzle game with C#,
                        </li>
                        <li>
                          Outsourced portion of the game via Github
                        </li>
                      </ul>
                    </td>
                  </tr>
                </table> -->
            </div>
            <div className="short-details">
                <h3 className="primary-colors skills section-head">
                    <i className="fas fa-star"></i> Skills
                </h3>
                <!-- <ul>
                  <li>
                    Vector Drawing
                    <div class="progress">
                      <div class="current primary-colors"></div>
                      <div class="full secondary-colors"></div>
                    </div>
                  </li>
                  <li>
                    JQuery
                    <div class="progress">
                      <div class="current primary-colors" style="width:90%"></div>
                      <div class="full secondary-colors"></div>
                    </div>
                  </li>
                  <li>
                    Web Designing
                    <div class="progress">
                      <div class="current primary-colors"></div>
                      <div class="full secondary-colors"></div>
                    </div>
                  </li>
                  <li>
                    Java
                    <div class="progress">
                      <div class="current primary-colors" style="width:80%"></div>
                      <div class="full secondary-colors"></div>
                    </div>
                  </li>
                </ul> -->

                <h3 className="primary-colors section-head">
                    <i className="fas fa-award"></i> Awards
                </h3>
                <!-- <ul class="circle-bullet type2">
                  <li>
                    Weebly award for best Navigation and Structure
                  </li>
                  <li>
                    Gold medalist during last year of graduation for standing 1st in university
                  </li>
                </ul> --> */}
            </div>
        </div>
    </div>;
};
export default ProfileScreen;
