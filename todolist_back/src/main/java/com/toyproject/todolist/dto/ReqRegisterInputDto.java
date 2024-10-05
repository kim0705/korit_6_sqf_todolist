package com.toyproject.todolist.dto;

import com.toyproject.todolist.entity.Todo;
import lombok.Builder;
import lombok.Data;

import java.util.Date;


@Data
public class ReqRegisterInputDto {
    private String content;
    private String registerDate;

    public Todo toEntity() {
        return Todo.builder()
                .content(content)
                .registerDate(registerDate)
                .build();
    }
}
