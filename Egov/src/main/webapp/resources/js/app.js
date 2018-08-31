"use strict"; // 엄격한 문법을 적용하세요(근엄) 틀리면 에러처리하라는 명령어(진지)
var app = app  || {}; 
var user = user || {}; 
app = {
		init : x =>{
			console.log('step 1');
			app.session.context(x);  // 저장장소 각자 사용자의 모니터 세션에다가 제일 먼저 저장해야하는 것 : 경로
			app.onCreate();
				
		},		
		onCreate : ()=>{
			console.log('step 3');
			app.setContentView();
			$('#login_btn').click(()=>{ //로그인버튼
				location.href = app.x()+'/move/auth/member/login';
			}); 
			
			$('#mypage').click(()=>{
				alert('mypage button');
				location.href = app.x()+"/member/modify";
			});	
				
			$('#login_submit').click(()=>{ // 제출버튼
					alert('login_submit');
					$('#loginForm')
					.attr({
						action:app.x()+'/member/login',
						method:"POST"
					}).submit();
				});
			
			$('#updateBtn').click(()=>{
				alert('moveUpdateForm!');
				$('#updateForm')
					.attr({
						action:app.x()+'/member/modify',
						method:"POST"
				}).submit();
			});
			
			$('#moveUpdateForm').click(()=>{
				alert('moveUpdateForm');
				location.href = app.x()+'/move/auth/member/modify';
			});
			$('#moveDeleteForm').click(()=>{
				location.href= app.x()+'/move/auth/member/remove';
			});
			$('#deleteBtn').click(()=>{
				$('#deleteForm')
				.attr({
					action: app.x()+'/member/remove',
					method:"POST"
			}).submit();
			});	
			$('#join_btn').click(()=>{
				location.href = app.x()+"/move/auth/member/add";
			});	
			/*$('#moveUpdateForm').click(function(){
				alert('modify click');
				$('#updateForm')
				.attr({
					action:app.x()+"member/update",
					method:"POST"
				}).submit();
			});*/
			$('#joinBth').click(()=>{
				alert('joinBth click');
				$('#joinForm')
				.attr({
					action:app.x()+'/member/add',
					method:"POST"
				}).submit();
				
		
				/*
				$('modify_Button')
				$('modify_Submit')*/
			
				/*	옛날방식
			 	$('#joinBth')
				.click(()=>{
						var form = document.getElementById('joinForm');
						form.action = x.context+"/member/add";
						form.method = "POST"; 
						form.submit();
					});*/
				
				
			});	
			
		
				
				
		},		
		setContentView : ()=>{
				
			console.log('step 4 : '+app.j());
		}		
				
};				
app.session = {	
		context : x=>{
			console.log('step 2 : '+x);
			sessionStorage.setItem('context',x);
			sessionStorage.setItem('js',x+'/resources/js');
			sessionStorage.setItem('css',x+'/resources/css');
			sessionStorage.setItem('img',x+'/resources/img');
		},
		path : x=>{
			return sessionStorage.getItem(x);
		}
}; // 객체 기반 생성… 

app.x = ()=>{
	return app.session.path('context');
};
app.j = ()=>{
	return app.session.path('js');
};

app.c = ()=>{
	return app.session.path('css');
};
app.i = ()=>{
	return app.session.path('img');
};
		
user.session = x=>{
	$.each(x, (k,v)=>{
		sessionStorage.setItem(k, v);
			});
	alert(sessionStorage.getItem('memid'));
}
