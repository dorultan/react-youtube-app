import React from 'react';
import './video-detail.less';



const VideoDetail = (props) => {
	return (
		<div className="flex-column">
		 <div className="flex-col">
		  <div className="video">
		   <iframe src={`https://www.youtube.com/embed/${props.video.id.videoId}`}></iframe>
		  </div>
		  <div className="detail">
		   <div className="title">
		    <h1>{props.video.snippet.title}</h1>
		   </div>
		   <div className="description">
		    <p>{props.video.snippet.description}</p>
		   </div>
		  </div>
		 </div>
		</div>
	)
}

export default VideoDetail;