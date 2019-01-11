import React, { Component } from 'react';
import Share from '../../../assets/Share.js';
import Download from '../../../assets/Download.js';
import DownloadLink from "react-download-link";

import { FacebookShareButton, FacebookIcon, 
		 TwitterShareButton, TwitterIcon, 
		 EmailShareButton, EmailIcon } from 'react-share';


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
		this.setState({isActive: !this.state.isActive})
	}

	onClickDownload(file){
	}

	render(){
		let { isActive } = this.state;
		return (
			<div className="photoTools">
				<a href={this.props.imgUrl} download="Glimpse Photo" target="blank">
						<Download />
				</a>
				{ !isActive 
				? 	<a
						type="button"
						className="socialShare"
						onClick={this.onClickShare}
					>
						<Share />
					</a>
				: <div id="share">
						<FacebookShareButton 
							url={this.props.imgUrl}>
							<FacebookIcon
							size={32}
							round />
						</FacebookShareButton>
						<TwitterShareButton
							url={this.props.imgUrl}
						 >
						 	<TwitterIcon
							size={32}
							round />
						 </TwitterShareButton>
						<EmailShareButton 
							url={this.props.imgUrl}>
							<EmailIcon
								size={32}
								round />
						</EmailShareButton>
						{/* TODO: add NPM packaging here 
						<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
						
						<a class="facebook" href="https://www.facebook.com/share.php?u={${this.props.imgUrl}}&title={Photo Taken with Glimpse}" target="blank"><i class="fa fa-facebook"></i></a>
						
						<a class="twitter" href="https://twitter.com/intent/tweet?status={Photo Taken with Glimpse}+{${this.props.imgUrl}}" target="blank"><i class="fa fa-twitter"></i></a>
						
						<a class="mail" href="mailto:?subject=Testing&body=AttachImage" target="blank">
							<i class="fa fa-envelope"></i>
						</a>*/}
						<span className="closeShare" onClick={this.onClickShare}>X</span>
					</div> 
				}
			</div>
		
		);
	}
}

export default SocialShare;
