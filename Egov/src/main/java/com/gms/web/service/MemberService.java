package com.gms.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.gms.web.domain.MemberDTO;
@Component
public interface MemberService {
	
	public void add(MemberDTO p);
	public List<?> list(Map<?, ?>p);
	public List<?> search(Map<?, ?>p);
	public MemberDTO retrieve(Map<?, ?>p);
	public int count(Map<?, ?>p);
	public void remove(Map<?, ?>p);
	public MemberDTO login(Map<?, ?>p);
	public void modify(MemberDTO member);

}
