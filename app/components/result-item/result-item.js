import React from 'react';
import './result-item.less';
import BrowserRouter, {Link} from 'react-router-dom';


const ResultItem = ({video}) => {
	let snippet = video.snippet;
	return (
		<div className="flex-col">
		 <div className="flex-row">
		  <div className="thumbnail">
		   <Link to={`watch/${video.id.videoId}`}><img src={snippet.thumbnails.medium.url}/></Link>
		  </div>
		  <div className="result-list-content">
		   <div className="result-title">
		    <h1>{snippet.title}</h1>
		   </div>
		   <div className="result-description">
		    <p>{snippet.description}</p>
		   </div>
		   <div className="channel-details">
		    <ul>
		   	 <li><a href="#">{snippet.channelTitle}</a></li>
		    </ul>
		   </div>
		  </div>
		 </div>
		</div>		
	)
};

export default ResultItem;