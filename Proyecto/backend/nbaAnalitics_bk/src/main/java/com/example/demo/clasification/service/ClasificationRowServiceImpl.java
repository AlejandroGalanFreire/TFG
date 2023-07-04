package com.example.demo.clasification.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.clasification.mapper.ClasificationRowMapper;
import com.example.demo.clasification.model.ClasificationRow;

@Service
public class ClasificationRowServiceImpl implements ClasificationRowService {
	
	@Autowired
	private ClasificationRowMapper esMapper;

	@Override
	public List<ClasificationRow> getClasification(String league) {
		return esMapper.getClasification(league);
	}

}
