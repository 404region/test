
document.getElementById('blank-block').onclick = function(evt) {
    var evt = evt || event;
    var target = evt.target || evt.srcElement;

    while(target != this) {
    	if(target.nodeName == 'TEXTAREA') {
    		return;
    	}
    	if (target.nodeName == 'DIV' && (hasClass(target, 'question-row')) ) {
    		if (hasClass(target, 'question-row-open')) {
			   removeClass(target, 'question-row-open');
			} else {
			   addClass(target, 'question-row-open');
			}
      }
      target = target.parentNode
    }
  }

// -------------- helpers --------------

function addClass(el, cls) {
	for(var c = el.className.split(' '),i=c.length-1; i>=0; i--) {
		if (c[i] == cls) return;
	}
  if (el.className == "") el.className = cls
	else el.className += ' '+cls
}

function hasClass(el, cls) {
	for(var c = el.className.split(' '),i=c.length-1; i>=0; i--) {
		if (c[i] == cls) return true;
	}
}

function removeClass(el, cls) {
  for(var c = el.className.split(' '),i=c.length-1; i>=0; i--) {
		if (c[i] == cls) c.splice(i,1);
	}

	el.className = c.join(' ');
}