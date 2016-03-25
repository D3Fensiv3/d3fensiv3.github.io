
function root(){
	var google = function(){
		var now = new Date();var date = new Date();
		date.setTime(date.getTime()+(1*60*1000));
		return {now:now.getTime(),date:date.getTime(),key:JSON.parse(localStorage.getItem('google')).key};
	};

	if(google.now > google.key){
		localStorage.setItem('google',JSON.stringify({'key':google.date}));
	}else if(JSON.parse(localStorage.getItem('google'))==undefined) {
		localStorage.setItem('google',JSON.stringify({'key':google.date}));
	}
	}
	root();
