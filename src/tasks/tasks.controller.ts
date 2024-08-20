/* eslint-disable */

import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Post()
    create(@Body() taskDto: any) {
        return this.tasksService.createTask(taskDto);
    }

    @Get()
    findAll() {
        return this.tasksService.getTasks();
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() taskDto: any) {
        return this.tasksService.updateTask(id, taskDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.tasksService.deleteTask(id);
    }
}
