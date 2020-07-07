import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    //set list of videos as state in app component so that 
    //have the list and app will get rerendered.
    state = {videos: [], selectedVideo: null};
    //we want to show the user somehting. a default when the 
    //application first loads. 
    componentDidMount(){
        this.onTermSubmit('cats');
    }
    onTermSubmit = async (term) =>{
        const response = await youtube.get('./search', {
            params:{
                q: term //q is the seach sting looking for 
            }
        })
        // console.log(response);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };
    onVideoSelect = (video) =>{
        // console.log('from the App!', video);
        this.setState({selectedVideo: video});
    }
    render(){
        return (
            
        <div className= "ui container"> 
        {/* I have {this.state.videos.length} videos */}
            <SearchBar onFormSubmit= {this.onTermSubmit}/>
            <div className ="ui grid">
                <div className ="ui row">
                    {/* it is a 16 wide colum  */}
                    <div className = "eleven wide column"> 
                        <VideoDetail video= {this.state.selectedVideo}/>
                    </div>
                    <div className = "five wide column">
                        <VideoList videos={this.state.videos} onVideoSelect= {this.onVideoSelect}/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;