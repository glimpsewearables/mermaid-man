import React, { Component } from 'react';
import shareIcon from '../../../assets/share.svg';
import downloadIcon from '../../../assets/download.svg';
import DownloadLink from "react-download-link";

class SocialShare extends Component  {
	constructor(props){
		super(props);

		this.state = {
			isActive: false
		};
		/* {/*
				onClick={onClick}
				onTouchEnd={onClick}
				{...props} */
		this.onClickShare = this.onClickShare.bind(this);
		this.onClickDownload = this.onClickDownload.bind(this);
	}

	onClickShare(){
		this.setState({isActive: !this.isActive})
	}

	onClickDownload(file){
	}

	render(){
		console.log(this.props.imgUrl);
		let isActive = this.state;
		return (
			<div className="photoTools">
				<button
						text="download"
						type="button"
						className="downloadBttn"
						onClick={ () => this.onClickDownload(this.props.imgUrl)}
					>
						<img src={downloadIcon} />
				</button>
				{ !this.state.isActive 
				? 	<button
						type="button"
						className="socialShare"
						onClick={this.onClickShare}
					>
						<img src={shareIcon} />
					</button>
				: null }
			</div>
		
		);
	}
}

export default SocialShare;
