import Window from '@/components/Window';

interface FrameProps {
  closeWindow: () => void;
  width: string;
  x: string;
}

export default function Resume ({ closeWindow, x, width }: FrameProps) {
	return (
		<Window closeWindow={closeWindow} x={x} width={width} title={'Resume'}>
			<h3>Experience</h3>
			<>
				<h5>Software Development Engineer, Associate</h5>
				<h6><b>Canon</b></h6>
				<i>Aug 2022 - Present</i>
			</>
			<p>
				<b>Responsibilities</b>
				<ul>
					<li>
                            Member of a small team behind an R&D project on a distributed cloud platform
					</li>
					<li>
                            Reduced request failures by over 90%
					</li>
					<li>
                            Redesigned & migrated database schema without interruption to the application
					</li>
					<li>
							Completed jira tickets in a timely fashion
					</li>
				</ul>
			</p>
			<p><b>Tech:</b> TypeScript, Node.js, React, Python, GCP, SQL</p>
			<hr className='hr hr-blurry' />
			<>
				<h5>Software Development Engineer in Test</h5>
				<h6><b>Endeavor</b></h6>
				<i>Dec 2021 - July 2022</i>
			</>
			<p>
				<b>Responsibilities</b>
				<ul>
					<li>
                            Created & programmed the data validation system for streaming services for the UFC,
                            WWE, English Premier League and other tier 1 clients using PyTest & AWS CodeBuild.
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
			<p><b>Tech:</b> Python, Pandas, AWS, Node.js,JavaScript, TypeScript, SQL</p>
			<hr className='hr hr-blurry' />
			<>
				<h5>QA Automation Engineer</h5>
				<h6><b>Endeavor</b></h6>
				<i>Feb 2021 - Dec 2021</i>
			</>
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
			<p><b>Tech:</b> Node.js, JavaScript, Mocha,Chai, SQL, Charles Proxy, Postman</p>
		</Window>
	);
}
