import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from '../search-bar/search-bar';
import VideoDetail from '../video-detail/video-detail';
import VideoList from '../video-list/video-list';
import {BrowserRouter as Router, Link, Switch, Route, PropsRoute} from 'react-router-dom';
import ResultList from '../results-list/results-list';

const YOUTUBE_KEY = 'AIzaSyBKa3MlRA-WseoGv5Gi9xSZp5AUPoqbl2c';

