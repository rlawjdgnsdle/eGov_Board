<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="content-box">
	<table>
		<tr>
			
			<td rowspan="3"><img id="profile" src="${img}${profile}" /></td>
			<td>아이디</td>
			<td colspan="2">${member.memberId}</td>
		</tr>
		<tr>
			<td>이름</td>
			<td colspan="2">${member.name}</td>
		</tr>
		<tr>
			<td><a>비밀번호</a></td>
			<td colspan="2">**********</td>
		</tr>
		<tr>
			<td>나이</td>
			<td>${member.age}</td>
			<td><a>팀명</a></td>
			<td>${member.teamId}</td>
		</tr>
		<tr>
		<td>성별</td>
		<td>${member.gender}</td>
		<td><a>역활</a></td>
		<td>${member.roll}</td>
		</tr>
	</table>
			${img}
			${profile}
	
		<a id="moveUpdateForm">정보수정</a> &nbsp; &nbsp;
		<a id="moveDeleteForm">회원탈퇴</a> &nbsp; &nbsp;
		<a id="logOut">로그아웃</a>
</div>

