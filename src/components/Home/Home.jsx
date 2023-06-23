import { Button } from "./Home.styled";

export const Home = () => {
	return (
		<>
			<header style={{ display: "flex", justifyContent: "space-evenly" }}>
				<Button to="/">Home</Button>
				<Button to="/tweets">Tweets</Button>
			</header>
			<main
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<h2>Here are five advantages of using the Tweets app</h2>
				<ol>
					<li>
						<h3>Efficient Communication</h3>
						<p>
							The Tweets app provides a convenient platform for users to engage
							in efficient communication. It allows users to quickly share their
							thoughts, opinions, and updates in a concise format, enabling
							effective and direct communication with others.
						</p>
					</li>
					<li>
						<h3>Real-time Information</h3>
						<p>
							With the Tweets app, users can stay updated with real-time
							information. They can follow accounts of interest, including news
							outlets, organizations, and influential individuals, to receive
							immediate updates and insights on various topics, events, and
							trends.
						</p>
					</li>
					<li>
						<h3>Networking and Community Building</h3>
						<p>
							The app facilitates networking and community building by
							connecting users with like-minded individuals and communities.
							Users can engage in discussions, join relevant conversations, and
							follow individuals with similar interests, fostering connections
							and collaborations.
						</p>
					</li>
					<li>
						<h3>Broad Reach and Global Audience</h3>
						<p>
							The Tweets app provides a platform for users to reach a broad
							audience globally. Users can share their thoughts and content
							publicly, potentially reaching millions of users who can discover,
							engage, and amplify their messages, helping to expand their reach
							and influence.
						</p>
					</li>
					<li>
						<h3>Hashtag and Trend Discovery</h3>
						<p>
							The app incorporates hashtags and trending topics, enabling users
							to discover popular discussions, events, and interests. Users can
							explore trending hashtags to join conversations, explore new
							ideas, and stay updated with current trends, enhancing their
							overall social media experience.
						</p>
					</li>
				</ol>
			</main>
		</>
	);
};
