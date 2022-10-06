import React from 'react'
import { Modal, Frame } from '@react95/core'
import 'bootstrap/dist/css/bootstrap.min.css'   
import '../style/misc.css'

function Exp({closeExp,wid}) {
    
    return (
        <Modal
            title={'Resume' }
            closeModal={closeExp}
            buttons={[{ value: "Close", onClick: closeExp  }]}
            style={{
                left:'67vw',
                top: '5vh',
                width: wid,
            }}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
                padding={20}
                style={{
					overflowY: "auto",
					maxHeight: "60vh",
				}}
            >
                <h4>Experience</h4>
                <p>
                        <h5>Software Development Engineer</h5>
                        <h6><b>Canon</b></h6>
                        <i>Aug 2022 - Present</i>
                    </p>
                    <p>
                        <b>Responsibilities</b>
                        <ul>
                            <li>
                                Architected & programmed the data validation system for streaming services for the UFC, 
                                WWE, English Premier League and other tier 1 clients using PyTest & AWS Services
                            </li>
                            <li>
                                Evaluated Jira tickets related to data reporting and delivery.
                            </li>
                            <li>
                                Migrated and maintained the internal testing dashboard for Data Services, used by the entire QA team.
                            </li>
                            <li>
                                Worked in an international team based in New York, England and China in an agile 
                                development environment.
                            </li>
                        </ul>
                    </p>
                    <p><b>Tech:</b> TypeScript, Node.js, React, Python, GCP, SQL</p>
                    <hr class="hr hr-blurry" />
                    <p>
                        <h5>Software Development Engineer in Test</h5>
                        <h6><b>Endeavor</b></h6>
                        <i>Dec 2021 - July 2022</i>
                    </p>
                    <p>
                        <b>Responsibilities</b>
                        <ul>
                            <li>
                                Architected & programmed the data validation system for streaming services for the UFC, 
                                WWE, English Premier League and other tier 1 clients using PyTest & AWS Services
                            </li>
                            <li>
                                Evaluated Jira tickets related to data reporting and delivery.
                            </li>
                            <li>
                                Migrated and maintained the internal testing dashboard for Data Services, used by the entire QA team.
                            </li>
                            <li>
                                Worked in an international team based in New York, England and China in an agile 
                                development environment.
                            </li>
                        </ul>
                    </p>
                    <p><b>Tech:</b> Python, Pandas, AWS, Node.js,JavaScript, TypeScript, SQL, Lens</p>
                    <hr class="hr hr-blurry" />
                    <p>
                        <h5>QA Automation Engineer</h5>
                        <h6><b>Endeavor</b></h6>
                        <i>Feb 2021 - Dec 2021</i>
                    </p>
                    <p>
                        <b>Responsibilities</b>
                        <ul>
                            <li>
                                Responsible for understanding and debugging the end to end system for streaming services for large
                                clients such as the NBA, NFL, Univision and ESPN.
                            </li>
                            <li>
                                Wrote the frontend test automation suite for PrendeTV, Univision’s streaming service.
                            </li>
                            <li>
                                Evaluated test builds of both Roku and FireTV apps using Roku’s proprietary testing tools 
                                & adb for FireTV
                            </li>
                            <li>
                                Investigated & Tested Services using Postman & Charles Proxy 
                            </li>
                        </ul>
                    </p>
                    <p><b>Tech:</b> Node.js, JavaScript, Mocha,Chai, SQL, Charles Proxy, Postman, adb</p>
            </Frame>
        </Modal >
    )
}

export default Exp;