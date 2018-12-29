//import { nominalTypeHack } from "prop-types";

// ==============================
// THEME
// ==============================

const theme = {};

// container
theme.container = {
	background: 'rgba(0, 0, 0, .9)',
	gutter: {
		horizontal: 10,
		vertical: 10,
	},
	zIndex: 2001,
};

// header
theme.header = {
	height: 40,
};
theme.close = {
	fill: 'white',
};

// footer
theme.footer = {
	color: 'white',
	count: {
		color: 'rgba(255, 255, 255, 0.75)',
		fontSize: '0.85em',
	},
	height: 40,
	gutter: {
		horizontal: 0,
		vertical: 5,
	},
};

theme.video_wrapper = {
        background: 'black',
        position: 'relative',
        width: '100%',
        height: '0',
        paddingBottom: '56.25%'
}

theme.video = {
	top: '0',
	left: '0',
	maxWidth: '100%',
	height: '100%'
}

// thumbnails
theme.thumbnail = {
	activeBorderColor: 'white',
	size: 50,
	gutter: 2,
};

// arrow
theme.arrow = {
	background: 'none',
	fill: 'white',
	height: 120,
};


export default theme;
