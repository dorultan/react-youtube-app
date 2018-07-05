import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar/search-bar';
import VideoDetail from './components/video-detail/video-detail';
import VideoList from './components/video-list/video-list';
import {Router, Link, Switch, Route, PropsRoute} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ResultList from './components/results-list/results-list';
import './components/var.less';

const history = createBrowserHistory();
const YOUTUBE_KEY = 'AIzaSyBKa3MlRA-WseoGv5Gi9xSZp5AUPoqbl2c';


const LandingPage = (props) => {
	console.log(props);
	return (
		<div>
		 <SearchBar search={this.state.search} handleOnKeyPress={this.handleOnKeyPress} handleOnChange={this.handleOnChange} handleOnSearchSubmit={this.handleOnSearchSubmit}/>
		 <ResultList videos={this.state.videos}/>
		</div>
	)
}

class Root extends Component {

	constructor(props) {
		super(props);
		this.state = {
			search: '',
			videos: []
		};

		this.handleOnSearchSubmit = this.handleOnSearchSubmit.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
	}

	getVideos() {
		let search = this.state.search === '' ? 'Cats' : this.state.search;

		YTSearch({
			key: YOUTUBE_KEY,
			term: search
		}, (data) => {
			this.setState(()=> {
				return {
					videos: data
				}
			})
		})
	}

	componentDidMount() {
		this.getVideos();
	}

	handleOnSearchSubmit() {
		this.getVideos();
	}

	handleOnKeyPress(e) {
		let search = this.state.search;
		if(e.key === 'Enter') {

			YTSearch({
				key: YOUTUBE_KEY,
				term: search
			}, (data) => {
				this.setState(()=> {
					return {
						videos: data
					}
				})
			})
		}
	}

	handleOnChange(e) {
		let search = e.target.value;

		this.setState( () =>{

			return {
				search: search
			}
		})
	}

	render() {

		return (
			<Router history={history}>
			<main className="main">
			 {/*<SearchBar/>*/}
			  <Route exact path="/" render={() => {
			  	return (
			  		<div>
			  		 <SearchBar search={this.state.search} handleOnKeyPress={this.handleOnKeyPress} handleOnChange={this.handleOnChange} handleOnSearchSubmit={this.handleOnSearchSubmit}/>
		 	  		 <ResultList videos={this.state.videos}/>
			  		</div>
			  	)
			  }}/>
			  <Route path="/watch/:id" render={({match}) => {

			  	if(this.state.videos.find(v => v.id.videoId === match.params.id) !== undefined) {
			  		return (
			  			<VideoDetail video={this.state.videos.find(v => v.id.videoId === match.params.id)}/>
			  		)
			  	}
			  	else {
			  		return (
			  			<h1>Loading</h1>
			  		)
			  	}
			  	
			  }}/>
			</main>
			</Router>
		)
	}
}

ReactDOM.render(<Root/>, document.getElementById('root'));