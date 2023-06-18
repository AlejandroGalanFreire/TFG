package com.example.demo.clasification.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.clasification.model.ClasificationRow;

@Mapper
public interface ClasificationRowMapper {
	
	List<ClasificationRow> getClasification(String league);
	
}
