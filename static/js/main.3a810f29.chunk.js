(this.webpackJsonpquizgen=this.webpackJsonpquizgen||[]).push([[0],{178:function(e,t,n){e.exports=n.p+"static/media/birthday1.c10921d4.png"},200:function(e,t,n){e.exports=n(360)},359:function(e,t,n){},360:function(e,t,n){"use strict";n.r(t);for(var a=n(0),i=n.n(a),l=n(44),r=n.n(l),o=(n(205),n(21)),s=n(22),c=n(23),u=n(24),m=n(14),d=n(25),f=n(374),p=n(373),h=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={promptEvent:null,appAccepted:!1},window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),n.setState({promptEvent:e})})),n.installApp=n.installApp.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"installApp",value:function(){var e=this,t=this.state.promptEvent;t.prompt(),t.userChoice.then((function(t){"accepted"===t.outcome&&e.setState({appAccepted:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.promptEvent,n=e.appAccepted,a=!1;return(window.matchMedia("(display-mode: standalone)").matches||n)&&(a=!0),i.a.createElement(f.a,{stackable:!0,inverted:!0,size:"massive"},i.a.createElement(f.a.Item,null,i.a.createElement("h1",{style:{color:"#2185D0",cursor:"pointer"}},"Dad's Birthday Quiz")),t&&!a&&i.a.createElement(f.a.Menu,{position:"right"},i.a.createElement(f.a.Item,null,i.a.createElement(p.a,{color:"teal",content:"Install App",size:"big",icon:"app store",labelPosition:"left",onClick:this.installApp}))))}}]),t}(a.Component),v=n(32),b=n(365),y=n(376),E=n(368),k=n(369),g=n(370),w=n(178),A=n.n(w),O=[{key:"10",text:"Entertainment: Books",value:"10"},{key:"11",text:"Entertainment: Films",value:"11"},{key:"12",text:"Entertainment: Music",value:"12"},{key:"14",text:"Entertainment: Television",value:"14"},{key:"17",text:"Science & Nature",value:"17"},{key:"20",text:"Mythology",value:"20"},{key:"22",text:"Geography",value:"22"},{key:"23",text:"History",value:"23"},{key:"24",text:"Politics",value:"24"},{key:"25",text:"Arts",value:"25"}],C=[],T=1;T<=50;T++){var j={key:T,text:"".concat(T),value:T};C.push(j)}for(var z=C,q=[{key:"easy",text:"Easy (1 point)",value:"easy",points:1},{key:"medium",text:"Medium (2 points)",value:"medium",points:2},{key:"hard",text:"Hard (3 points)",value:"hard",points:3}],x=[{key:"0",text:"Any Type",value:"0"},{key:"multiple",text:"Multiple Choice",value:"multiple"},{key:"boolean",text:"True / False",value:"boolean"}],I=[],S=1;S<=60;S++){var Q={key:S,text:"Timer: ".concat(S," minutes"),value:S};I.push(Q)}var M=I,H=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={category:null,numOfQ:1,difficulty:"medium",type:"multiple",time:2},n.setValue=n.setValue.bind(Object(m.a)(n)),n.getValue=n.getValue.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"setValue",value:function(e,t){this.setState(Object(v.a)({},e,t))}},{key:"getValue",value:function(e){return this.state[e]}},{key:"render",value:function(){var e=this,t=this.state,n=t.category,a=t.numOfQ,l=t.difficulty,r=t.type,o=t.time,s=!1,c=null;return n&&a&&l&&r&&o&&(s=!0,c={category:n,numOfQ:a,difficulty:l,type:r,time:o}),i.a.createElement(b.a,null,i.a.createElement("style",null," .ui.selection.list !important { background: blue } "," "),i.a.createElement(y.a,null,i.a.createElement(E.a.Group,{divided:!0},i.a.createElement(E.a,null,i.a.createElement(E.a.Image,{src:A.a}),i.a.createElement(E.a.Content,null,i.a.createElement(E.a.Meta,null,"This page is for use by the designated reader, who should first ask the current player for their desired category and difficulty level.",i.a.createElement("br",null),i.a.createElement("br",null),"After every question, the reader and player changes as follows.",i.a.createElement("ol",{style:{fontSize:"16px",lineHeight:"2"}},i.a.createElement("li",null,"Massachusetts reads a question for Georgia."),i.a.createElement("li",null,"Georgia reads a question for California."),i.a.createElement("li",null,"California reads a question for Massachusetts."),i.a.createElement("li",null,"Go back to step 1."))),i.a.createElement(E.a.Header,null,i.a.createElement("h2",null,"Get Random Trivia Question")),i.a.createElement("br",null),i.a.createElement(p.a.Group,null,q.map((function(t){return i.a.createElement(p.a,{style:{marginTop:"5px"},key:t.value,active:e.getValue("difficulty")===t.value,onClick:function(n){e.setValue("difficulty",t.value)}}," ",t.text," ")}))),i.a.createElement(E.a.Meta,null,i.a.createElement(k.a,{selection:!0,verticalAlign:"middle"},O.map((function(t){return i.a.createElement(k.a.Item,{style:{color:"black"},key:t.value,active:e.getValue("category")===t.value,onClick:function(n){return e.setValue("category",t.value)}},t.text)}))),i.a.createElement(g.a,{style:{display:"none"},fluid:!0,selection:!0,name:"numOfQ",placeholder:"Select No. of Questions",options:z,defaultValue:1,onChange:function(t,n){var a=n.name,i=n.value;console.info(a,i,typeof i),e.setValue(a,i)}}),i.a.createElement(g.a,{style:{display:"none"},fluid:!0,selection:!0,name:"type",placeholder:"Select Questions Type",options:x,defaultValue:"multiple",onChange:function(t,n){var a=n.name,i=n.value;console.info(a,i),e.setValue(a,i)}})),i.a.createElement(E.a.Extra,null,s?i.a.createElement(p.a,{primary:!0,content:"Get Question",onClick:function(){return e.props.startQuiz(c)},size:"big",icon:"play",labelPosition:"left"}):i.a.createElement(p.a,{disabled:!0,primary:!0,content:"Create Question",size:"big",icon:"play",labelPosition:"left"}),i.a.createElement("br",null),i.a.createElement(g.a,{fluid:!0,selection:!0,name:"time",placeholder:"Select Countdown Time (In Minutes)",defaultValue:5,options:M,onChange:function(t,n){var a=n.name,i=n.value;return e.setValue(a,i)}})))))),i.a.createElement("br",null))}}]),t}(a.Component),P=n(92),D=n(377),V=n(372),N=n(366),L=n(56),R=n.n(L),U=n(39),_=function(e){var t=e.text;return i.a.createElement(b.a,null,i.a.createElement(V.a,{icon:!0,size:"big"},i.a.createElement(U.a,{name:"circle notched",loading:!0}),i.a.createElement(V.a.Content,null,i.a.createElement(V.a.Header,null,"Just one second"),t||"Fetching from trivia database...")))},G=n(367),B=function(e){function t(e){var n;Object(o.a)(this,t),n=Object(c.a)(this,Object(u.a)(t).call(this,e));var a=6e4*e.countdownTime;return n.state={timerStart:0,timerTime:a,totalTime:a},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"startTimer",value:function(){var e=this;this.timer=setInterval((function(){var t=e.state.timerTime-1e3;t>=0?e.setState({timerTime:t}):(clearInterval(e.timer),R.a.fire({title:"YOUR TIME IS UP",type:"info",timer:5e3,onClose:function(){e.props.timesUp()}}))}),1e3)}},{key:"componentDidMount",value:function(){this.startTimer()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer);var e=this.state,t=e.timerTime,n=e.totalTime;this.props.timeAmount(t,n)}},{key:"render",value:function(){var e,t=this.state.timerTime,n=(e=t,{hours:("0"+Math.floor(e/36e5%60)).slice(-2),minutes:("0"+Math.floor(e/6e4%60)).slice(-2),seconds:("0"+Math.floor(e/1e3%60)%60).slice(-2)}),a=n.hours,l=n.minutes,r=n.seconds;return i.a.createElement(p.a.Group,{size:"massive",basic:!0,floated:"right"},i.a.createElement(G.a,{content:"Hours",trigger:i.a.createElement(p.a,{active:!0},a),position:"bottom left"}),i.a.createElement(G.a,{content:"Minutes",trigger:i.a.createElement(p.a,{active:!0},l),position:"bottom left"}),i.a.createElement(G.a,{content:"Seconds",trigger:i.a.createElement(p.a,{active:!0},r),position:"bottom left"}))}}]),t}(a.Component),W=n(371),F=function(e){var t=e.questionsAndAnswers;return i.a.createElement(W.a,{celled:!0,striped:!0},i.a.createElement(W.a.Header,null,i.a.createElement(W.a.Row,null,i.a.createElement(W.a.HeaderCell,null,"No."),i.a.createElement(W.a.HeaderCell,null,"Questions"),i.a.createElement(W.a.HeaderCell,null,"Chosen Answers"),i.a.createElement(W.a.HeaderCell,null,"Correct Answers"),i.a.createElement(W.a.HeaderCell,null,"Points"))),i.a.createElement(W.a.Body,null,t.map((function(e,t){return i.a.createElement(W.a.Row,{key:t+1},i.a.createElement(W.a.Cell,null,t+1),i.a.createElement(W.a.Cell,null,e.question),i.a.createElement(W.a.Cell,null,e.user_answer),i.a.createElement(W.a.Cell,null,e.correct_answer),i.a.createElement(W.a.Cell,null,e.point))}))))},J=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={activeTab:"Stats"},n.handleTabClick=n.handleTabClick.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleTabClick",value:function(e,t){var n=t.name;this.setState({activeTab:n})}},{key:"render",value:function(){var e=this.props,t=e.questionsAndAnswers,n=e.backToHome;return i.a.createElement(b.a,null,i.a.createElement("p",null,"If the player answered correctly, please remind the scorekeeper how many points they gained."),i.a.createElement(F,{questionsAndAnswers:t}),i.a.createElement(p.a,{color:"teal",content:"Ask Another",onClick:n,size:"big",icon:"home",labelPosition:"left",style:{marginBottom:8}}))}}]),t}(a.Component),Y=function(){return i.a.createElement(b.a,null,i.a.createElement(y.a,{placeholder:!0},i.a.createElement(D.a,{icon:!0},i.a.createElement(U.a,{name:"unlink"}),i.a.createElement("br",null),"It looks like you're offline, Please check your internet connection.")))},$=n(59),K=n.n($),X=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},Z=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={quizData:null,isLoading:!0,questionIndex:0,correctAnswers:0,userSlectedAns:null,quizIsCompleted:!1,questionsAndAnswers:[],isOffline:!1},n.timeTakesToComplete=void 0,n.setData=n.setData.bind(Object(m.a)(n)),n.handleItemClick=n.handleItemClick.bind(Object(m.a)(n)),n.handleNext=n.handleNext.bind(Object(m.a)(n)),n.timesUp=n.timesUp.bind(Object(m.a)(n)),n.timeAmount=n.timeAmount.bind(Object(m.a)(n)),n.renderResult=n.renderResult.bind(Object(m.a)(n)),n.retakeQuiz=n.retakeQuiz.bind(Object(m.a)(n)),n.startNewQuiz=n.startNewQuiz.bind(Object(m.a)(n)),n.resolveError=n.resolveError.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.API;fetch(t).then((function(e){return e.json()})).then((function(t){return setTimeout((function(){return e.setData(t.results)}),1e3)})).catch((function(t){return setTimeout((function(){return e.resolveError(t)}),1e3)}))}},{key:"resolveError",value:function(e){navigator.onLine?(this.setState({isOffline:!0}),console.log("API problem ==> ",e)):(this.setState({isOffline:!0}),console.log("Connection problem"))}},{key:"setData",value:function(e){var t=this;if(0===e.length){return R.a.fire({title:"Oops...",html:"The API doesn't have enough questions for your query<br />(ex. Asking for 50 questions in a category that only has 20).<br /><br />Please change number of questions, difficulty level or type of questions.",type:"error",timer:1e4,onClose:function(){t.props.backToHome()}})}var n=e,a=this.state.questionIndex,i=X(0,3),l=Object(P.a)(n[a].incorrect_answers);l.splice(i,0,n[a].correct_answer),this.setState({quizData:n,isLoading:!1,options:l,outPut:i})}},{key:"handleItemClick",value:function(e,t){var n=t.name;this.setState({userSlectedAns:n})}},{key:"handleNext",value:function(){var e=this.state,t=e.userSlectedAns,n=e.quizData,a=e.questionIndex,i=e.correctAnswers,l=e.questionsAndAnswers,r=0;if(t===K.a.decode(n[a].correct_answer)){var o=n[a].difficulty;r=(o=q.find((function(e){return e.key===o}))).points}if(l.push({question:K.a.decode(n[a].question),user_answer:t,correct_answer:K.a.decode(n[a].correct_answer),point:r}),a!==n.length-1){var s=X(0,3),c=Object(P.a)(n[a+1].incorrect_answers);c.splice(s,0,n[a+1].correct_answer),this.setState({correctAnswers:i+r,questionIndex:a+1,userSlectedAns:null,options:c,outPut:s,questionsAndAnswers:l})}else this.setState({correctAnswers:i+r,userSlectedAns:null,isLoading:!0,quizIsCompleted:!0,questionIndex:0,options:null,questionsAndAnswers:l})}},{key:"timesUp",value:function(){this.setState({userSlectedAns:null,isLoading:!0,quizIsCompleted:!0,questionIndex:0,options:null})}},{key:"timeAmount",value:function(e,t){this.timeTakesToComplete={timerTime:e,totalTime:t}}},{key:"renderResult",value:function(){var e=this;setTimeout((function(){var t=e.state,n=t.quizData,a=t.correctAnswers,l=t.questionsAndAnswers,r=e.props.backToHome,o=i.a.createElement(J,{totalQuestions:n.length,correctAnswers:a,timeTakesToComplete:e.timeTakesToComplete,questionsAndAnswers:l,retakeQuiz:e.retakeQuiz,backToHome:r});e.setState({resultRef:o,questionsAndAnswers:[]})}),2e3)}},{key:"retakeQuiz",value:function(){var e=this.state,t=e.quizData,n=e.questionIndex,a=X(0,3),i=Object(P.a)(t[n].incorrect_answers);i.splice(a,0,t[n].correct_answer),this.setState({correctAnswers:0,quizIsCompleted:!1,startNewQuiz:!0,options:i,outPut:a})}},{key:"startNewQuiz",value:function(){var e=this;setTimeout((function(){e.setState({isLoading:!1,startNewQuiz:!1,resultRef:null})}),1e3)}},{key:"render",value:function(){var e=this,t=this.state,n=t.quizData,a=t.questionIndex,l=t.options,r=t.userSlectedAns,o=t.isLoading,s=t.quizIsCompleted,c=t.resultRef,u=t.startNewQuiz,m=t.isOffline;return s&&!c&&this.renderResult(),u&&this.startNewQuiz(),i.a.createElement(E.a.Header,null,!m&&!s&&o&&i.a.createElement(_,null),!m&&!o&&i.a.createElement(b.a,null,i.a.createElement(y.a,null,i.a.createElement(E.a.Group,{divided:!0},i.a.createElement(E.a,null,i.a.createElement(E.a.Content,null,i.a.createElement(E.a.Extra,null,i.a.createElement(D.a,{as:"h1",block:!0,floated:"left"},i.a.createElement(D.a.Content,null,n[a].category,"\xa0 (",n[a].difficulty,")")),i.a.createElement(B,{countdownTime:this.props.countdownTime,timesUp:this.timesUp,timeAmount:this.timeAmount})),i.a.createElement("br",null),i.a.createElement(E.a.Meta,null,i.a.createElement(V.a,{size:"huge",floating:!0},i.a.createElement("b",null,"Q. ".concat(K.a.decode(n[a].question)))),i.a.createElement("br",null),i.a.createElement(E.a.Description,null,i.a.createElement("h3",null,"Please choose one of the following answers:")),i.a.createElement(N.a,null),i.a.createElement(f.a,{vertical:!0,fluid:!0,size:"massive"},l.map((function(t,n){var a;switch(n){case 0:a="A.";break;case 1:a="B.";break;case 2:a="C.";break;case 3:a="D.";break;default:a=n}var l=K.a.decode(t);return i.a.createElement(f.a.Item,{key:l,name:l,active:r===l,onClick:e.handleItemClick},i.a.createElement("b",{style:{marginRight:"8px"}},a),l)})))),i.a.createElement(N.a,null),i.a.createElement(E.a.Extra,null,i.a.createElement(p.a,{primary:!0,content:"Next",onClick:this.handleNext,floated:"right",size:"big",icon:"right chevron",labelPosition:"right",disabled:!r})))))),i.a.createElement("br",null)),s&&!c&&i.a.createElement(_,{text:"Getting your result."}),s&&c,m&&i.a.createElement(Y,null))}}]),t}(a.Component),ee=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isQuizStart:!1,API:null,countdownTime:null,isLoading:!1},n.startQuiz=n.startQuiz.bind(Object(m.a)(n)),n.backToHome=n.backToHome.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"startQuiz",value:function(e){var t=e.category,n=e.numOfQ,a=e.difficulty,i=e.type,l=e.time,r="".concat("https://opentdb.com/api.php?amount="+n,"&").concat("category="+t,"&").concat("difficulty="+a,"&").concat("type="+i);this.setState({isQuizStart:!0,API:r,countdownTime:l})}},{key:"backToHome",value:function(){var e=this;this.setState({isLoading:!0}),setTimeout((function(){e.setState({isQuizStart:!1,API:null,countdownTime:null,isLoading:!1})}),1e3)}},{key:"render",value:function(){var e=this.state,t=e.isQuizStart,n=e.API,l=e.countdownTime,r=e.isLoading;return i.a.createElement(a.Fragment,null,i.a.createElement(h,null),!r&&!t&&i.a.createElement(H,{startQuiz:this.startQuiz}),!r&&t&&i.a.createElement(Z,{API:n,countdownTime:l,backToHome:this.backToHome}),r&&i.a.createElement(_,null))}}]),t}(a.Component),te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t&&t.onUpdate&&t.onUpdate(e):(R.a.fire({toast:"true",position:"bottom",type:"success",title:"App is ready to work offline.",showConfirmButton:!1,timer:6e3}),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(359);r.a.render(i.a.createElement(ee,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/quizgen",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/quizgen","/service-worker.js");te?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ne(e,t)})).catch((function(){}))}(t,e),navigator.serviceWorker.ready.then((function(){}))):ne(t,e)}))}}()}},[[200,1,2]]]);
//# sourceMappingURL=main.3a810f29.chunk.js.map