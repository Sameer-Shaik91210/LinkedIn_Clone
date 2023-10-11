/** @format */

import React, { useEffect, useState } from "react";
import "./Feed.css";
import InputOptions from "./InputOptions";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "../Firebase/firebase";
import {
  query,
	collection,
	addDoc,
	FieldValue,
	getDocs,
	orderBy,
	serverTimestamp,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import {selectUser} from  '../features/User/userSlice'
import FlipMove from "react-flip-move";
function Feed() {
	const [input, setInput] = useState("");
	const [posts, setPosts] = useState([]);
	const user=useSelector(selectUser);
	const userName=user?.displayName;
	const userEmail=user?.email;
  const fetchPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
  
      newData.sort((a, b) => b.timestamp.seconds - a.timestamp.seconds);
  
      console.log(newData);
      setPosts(newData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  
  
  

	useEffect(() => {
		// db.collection("posts").onSnapShot((snapshot)=>{
		//     setPosts(
		//         snapshot.docs.map((doc)=>({
		//             id:doc.id,
		//             data:doc.data(),
		//         }))
		//     )
		// })
		fetchPosts();
	}, []);
	const sendPost = async (e) => {
		e.preventDefault();
		console.log(posts);

		try {
			const docRef = await addDoc(collection(db, "posts"), {
				name: user.displayName,
				description: user.email,
				message: input,
				photoUrl: "",
				timestamp: serverTimestamp(),
			});
			console.log("Document written with id:", docRef.id);
		} catch (e) {
			console.log("error adding document:", e);
		}
    setInput('');
    fetchPosts();
	};
	return (
		<div className="feed">
			<div className="feed_inputContainer">
				<div className="feed_input">
					<CreateIcon />
					<form>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							type="text"
						/>
						<button onClick={sendPost} type="submit">
							Send
						</button>
					</form>
				</div>
				<div className="feed_inputOptions">
					<InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
					<InputOptions
						Icon={SubscriptionsIcon}
						title="Video"
						color="#E7A33E"
					/>
					<InputOptions Icon={EventNoteIcon} title="Note" color="#C0CBCD" />
					<InputOptions
						Icon={CalendarViewDayIcon}
						title="Write article"
						color="#7FC15E"
					/>
				</div>
			</div>
			{/* Posts */}
			<FlipMove>
			{posts.map(({ id, description,name,message,photoUrl }) => {
				return (
					<Post
						key={id}
						name={name}
						description={description}
						message={message}
						photoUrl={photoUrl}
					/>
				);
			})}
			</FlipMove>
	
		</div>
	);
}

export default Feed;
