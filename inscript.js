/* 


       Original Code By Santhosh Thottingal ,
    Modified By Hrishikesh K B <hrishi.kb@gmail.com> 


#   This program is free software; you can redistribute it and/or modify
#   it under the terms of the GNU Lesser General Public License as published by
#   the Free Software Foundation; either version 3 of the License, or
#   (at your option) any later version.
#
#   This program is distributed in the hope that it will be useful,
#   but WITHOUT ANY WARRANTY; without even the implied warranty of
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#   GNU Lesser General Public License for more details.
#
#   You should have received a copy of the GNU General Public License
#   along with this program; if not, write to the Free Software
#   Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.
#
#   If you find any bugs or have any suggestions email: hrishi.kb@gmail.com
#         

*/ 

 

var pattern=null;
var tabCount=1;
function bind_inscript(widget){

if(widget.aBound){ 
widget.aBound=false;
disable();
return;  
}

var A={
a:'\u0D4B',
b:'\u0D35',
c:'\u0D2E',
d:'\u0D4D',
e:'\u0D3E',
f:'\u0D3F',
g:'\u0D41',
h:'\u0D2A',
i:'\u0D17',
j:'\u0D30',
k:'\u0D15',
l:'\u0D24',
m:'\u0D38',
n:'\u0D32',
o:'\u0D26',
p:'\u0D1C',
q:'\u0D57',
r:'\u0D40',
s:'\u0D47',
t:'\u0D42',
u:'\u0D39',
v:'\u0D28',
w:'\u0D48',
x:'\u0D02',
y:'\u0D2C',
z:'\u0D2C',
A:'\u0D4B',
B:'\u0D34',
C:'\u0D23',
D:'\u0D05',
E:'\u0D06',
F:'\u0D07',
G:'\u0D08',
H:'\u0D2B',
I:'\u0D18',
J:'\u0D31',
K:'\u0D16',
L:'\u0D25',
M:'\u0D36',
N:'\u0D33',
O:'\u0D27',
P:'\u0D1D',
Q:'\u0D14',
R:'\u0D08',
S:'\u0D0F',
T:'\u0D0A',
U:'\u0D19',
V:'\u0D28',
W:'\u0D10',
X:'\u0D02',
Y:'\u0D2D',
Z:'\u0D0E',
'`':'\u0D4A',
'~':'\u0D12',
'+':'\u0D0B',
'=':'\u0D43',
'[':'\u0D21',
']':'\u200D',
'{':'\u0D22',
'}':'\u0D1E',
':':'\u0D1B',
'':'\u0D1A',
'<':'\u0D37',
'/':'\u0D2F',
'\"':'\u0D20',
'\'':'\u0D1F'

};
function isToggleEvent(event){
 event = (event) ? event : window.event;
  kCode = event.keyCode || event.which; 
  return   ((event.keyCode == 13 && event.ctrlKey) || (event.which == 109 && event.ctrlKey));
};
function enable(){
widget.onkeypress=keypressEnabled;
widget.style.outline = 'dashed 1px red';
};
function disable(){
widget.style.background='white';
widget.onkeypress=keypressDisabled;
widget.style.outline = null;

};
function checkBoxListener(){
	if(widget.aBound){
		widget.aBound=false;
		disable();
	 }	
else{
		widget.aBound=true;
		enable();
	}
}
function keypressEnabled(event){
 
	if (event == undefined)
		event = window.event;
	if(isToggleEvent(event)){
		disable();
		document.getElementById("toggle").checked = false;
		return;
	}
	getWidgetSelectionStart(widget);
	kCode = event.keyCode || event.which; 
 
	if ( kCode  == 8) {
		if(pattern.indexOf('a')>=0 || pattern.indexOf('A')>=0 || pattern.indexOf('e')>=0 || pattern.indexOf('E')>=0 || pattern.indexOf('i')>=0 || pattern.indexOf('I')>=0 || pattern.indexOf('o')>=0 || pattern.indexOf('O')>=0 || pattern.indexOf('u')>=0 || pattern.indexOf('U')>=0|| pattern.indexOf('1')>=0 || pattern.indexOf('2')>=0 || pattern.indexOf('3')>=0 || pattern.indexOf('4')>=0 || pattern.indexOf('5')>=0 || pattern.indexOf('6')>=0 || pattern.indexOf('7')>=0 || pattern.indexOf('8')>=0 || pattern.indexOf('9')>=0  ){
			pattern=pattern.replace('a','');
			pattern=pattern.replace('a',''); 
			pattern=pattern.replace('A','');
			pattern=pattern.replace('e','');
			pattern=pattern.replace('e','');
			pattern= pattern.replace('E','');
			pattern= pattern.replace('i','');
			pattern= pattern.replace('i','');
			pattern= pattern.replace('I','');
			pattern= pattern.replace('o','');
			pattern= pattern.replace('o','');
			pattern= pattern.replace('O','');
			pattern= pattern.replace('u','');
			pattern= pattern.replace('u','');
			pattern= pattern.replace('U','');
			pattern= pattern.replace('1','');
			pattern= pattern.replace('2','');
			pattern= pattern.replace('3','');
			pattern= pattern.replace('4','');
			pattern= pattern.replace('5','');
			pattern= pattern.replace('6','');
			pattern= pattern.replace('7','');
			pattern= pattern.replace('8','');
			pattern= pattern.replace('9','');
			tabCount=1;
			return;
		}
	}
	if(event.ctrlKey||event. altKey||event.metaKey){
		return true;
	}
	var char=String.fromCharCode(kCode );
	var pos=widget.selectionStart;

	if(!mal) {
		pattern=char;
		tabCount=1;
		patternStart=widget.selectionStart;
		var mal=A[pattern];
	} 
	if(mal){
		var scrollTop = widget.scrollTop;
		
		var cursorLoc =  widget.selectionStart;var stepback=cursorLoc-patternStart;
		widget.value=  widget.value.substr(0,patternStart)+mal+widget.value.substr(widget.selectionEnd,widget.value.length); 
		widget.scrollTop=scrollTop ;
		widget.selectionStart = cursorLoc + mal.length  - stepback  ;
		widget.selectionEnd = cursorLoc + mal.length - stepback;
		return false;
	}
	if( kCode ==9){
		return false;
	}
	return true;
};
function keypressDisabled(event){
if(isToggleEvent(event)){
enable();
document.getElementById("toggle").checked = true;
return false;
}
return true;
};
widget.aBound=false;
disable();
var checkbox = document.getElementById("toggle");
if (checkbox.addEventListener) 
                checkbox.addEventListener("click", checkBoxListener,false);
else if (checkbox.attachEvent) 
                checkbox.attachEvent("onclick", checkBoxListener);
};
 function addCheckbox(textBox) {
            if(textBox==null) return;
            try
            {
			var searchBox= document.getElementById("searchInput");
            var element = document.createElement("input");
            element.setAttribute("type","checkbox");
            element.setAttribute("id","toggle");
            var labelcheckBox = document.createTextNode(' Transliterate - Use Ctrl + M to Toggle.');
            textBox.parentNode.insertBefore(element,textBox);
            if(searchBox) searchBox.parentNode.insertBefore(element,searchBox);
           /*  textBox.insertBefore(element,textBox);*/
            document.getElementById("toggle").checked = textBox.aBound;
            textBox.parentNode.insertBefore(labelcheckBox,textBox);
           if(searchBox)  searchBox.parentNode.insertBefore(labelcheckBox,searchBox);
            var p = document.createElement("p");
            p.setAttribute("style","width:100%;height:1px;");
            textBox.parentNode.insertBefore(p,textBox);
            if(searchBox) searchBox.parentNode.insertBefore(p,searchBox);
             }
             catch(ex)
             {
              alert(ex);
             }
}
function bindAllTextElements() {
	
	var ta=document.getElementsByTagName('textarea');
 
	for(var i=0;i < ta.length;++i){
		addCheckbox(ta[i]);
		bind_inscript(ta[i]);
	}
	var tb=document.getElementsByTagName('input');
	for(var i=0;i < tb.length;++i){	
	 type = tb[i].getAttribute('type'); 	
		if ( type == 'text' || type == null) { 
			bind_inscript(tb[i]);
		}
	}	
	
	var ifs = document.getElementsByTagName('iframe');	
    var len=ifs.length;
	for (var i=0;i < len; i++) {		
		bindAllTextElements(ifs[i].contentDocument.documentElement);
	}
	
 };
function addLoadEvent(func) {
	 
            if (window.addEventListener) {
            	window.addEventListener("load", func, false);
			}
            else if (window.attachEvent) {
            	window.attachEvent("onload", func);
			}
}
 
 function getWidgetSelectionStart (widget) {
	 if( document.selection ){
	// The current selection
	var range = document.selection.createRange();
	// We'll use this as a 'dummy'
	var stored_range = range.duplicate();
	// Select all text
	stored_range.moveToElementText( widget );
	// Now move 'dummy' end point to end point of original range
	stored_range.setEndPoint( 'EndToEnd', range );
	// Now we can calculate start and end points
	widget.selectionStart = stored_range.text.length - range.text.length;
	widget.selectionEnd = widget.selectionStart + range.text.length;
}
 }
addLoadEvent(bindAllTextElements);


