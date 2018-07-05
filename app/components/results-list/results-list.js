import React from 'react';
import ResultItem from '../result-item/result-item';
import './results-list.less';

const ResultsList = (props) => {

	return (

		<div className="flex-column">
		 {
		 	props.videos.map((video, index) => {

		 		return (
		 			<ResultItem video={video} key={index}/>
		 		)
		 	})
		 }
		</div>
		
	)
};

export default ResultsList;