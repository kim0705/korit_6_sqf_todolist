package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqRegisterInputDto;
import com.toyproject.todolist.dto.ReqUpdateTodoListDto;
import com.toyproject.todolist.service.TodolistService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class TodoController {

    @Autowired
    private TodolistService todolistService;

    @PostMapping("/todo") // 생성
    public ResponseEntity<?> registerApi(@RequestBody ReqRegisterInputDto dto) {
        todolistService.registerTodo(dto);
        return ResponseEntity.ok().body(true);
    }

    @GetMapping("/todolist") // 날짜별 조회
    public ResponseEntity<?> getApi(@RequestParam(required = false) String registerDate) {
        log.info("{}", registerDate);
        return ResponseEntity.ok().body(todolistService.getTodoList(registerDate));
    }

    @GetMapping("/todo/{todoId}")
    public ResponseEntity<?> updateGetApi(@PathVariable int todoId) {
        return ResponseEntity.ok().body(todolistService.getTodo(todoId));
    }

    @PutMapping("/todo/{todoId}") // 수정
    public ResponseEntity<?> updateApi(@RequestBody ReqUpdateTodoListDto dto) {
        log.info("{}", dto);
        todolistService.updateTodo(dto);
        return ResponseEntity.ok().body(true);
    }

    @DeleteMapping("/todo/{todoId}") // 삭제
    public ResponseEntity<?> deleteApi(@PathVariable int todoId) {
        todolistService.deleteTodo(todoId);
        return ResponseEntity.ok().body(true);
    }


}
