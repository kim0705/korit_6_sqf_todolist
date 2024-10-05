package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.*;
import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.repository.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodolistService {

    @Autowired
    private TodoMapper todoMapper;

    public void registerTodo(ReqRegisterInputDto dto) {
         todoMapper.save(dto.toEntity());
    }


    //조회
    public List<RespGetTodoListDto> getTodoList(String registerDate) {
        List<RespGetTodoListDto> respDtos = new ArrayList<>();

        List<Todo> todos = todoMapper.findByTodoListAll(registerDate);

        return todos.stream().map(Todo::toRespGetTodoDto).collect(Collectors.toList());
    }


    public RespGetTodoDto getTodo(int todoId) {
            Todo todo = todoMapper.findByTodoId(todoId);

            return RespGetTodoDto.builder()
                    .todoId(todo.getTodoId())
                    .checkStatus(todo.getCheckStatus())
                    .content(todo.getContent())
                    .registerDate(todo.getRegisterDate())
                    .build();

    }

    //수정
    public void updateTodo(ReqUpdateTodoListDto dto) {
         todoMapper.update(dto.toEntity());
    }

    //삭제
    public void deleteTodo(int todoId) {
         todoMapper.delete(todoId);
    }
}
