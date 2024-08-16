package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqRegisterInputDto;
import com.toyproject.todolist.dto.ReqUpdateTodoListDto;
import com.toyproject.todolist.dto.ReqUserDto;
import com.toyproject.todolist.entity.User;
import com.toyproject.todolist.service.UserService;
import com.toyproject.todolist.service.TodolistService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class TodoController {

    @Autowired
    private TodolistService todolistService;

    @Autowired
    private UserService userService;

    @PostMapping("/todo") // 생성
    public ResponseEntity<?> registerApi(@RequestBody ReqRegisterInputDto reqDto) {
        return ResponseEntity.ok().body(todolistService.registerTodo(reqDto));
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
    public ResponseEntity<?> updateApi(@RequestBody ReqUpdateTodoListDto reqDto) {
        return ResponseEntity.ok().body(todolistService.updateTodo(reqDto));
    }

    @DeleteMapping("/todo/{todoId}") // 삭제
    public ResponseEntity<?> deleteApi(@PathVariable int todoId) {
        return ResponseEntity.ok().body(todolistService.deleteTodo(todoId));
    }


}
