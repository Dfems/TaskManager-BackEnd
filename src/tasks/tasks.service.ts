/* eslint-disable */

import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class TasksService {
    constructor(private readonly firebaseService: FirebaseService) {}

    async createTask(taskDto: any) {
        const db = this.firebaseService.getDatabase();
        const taskRef = db.collection('tasks').doc();
        const newTask = { ...taskDto, id: taskRef.id };
        await taskRef.set(newTask);
        return newTask; 
    }

    async getTasks() {
        const db = this.firebaseService.getDatabase();
        const tasksSnapshot = await db.collection('tasks').get();
        return tasksSnapshot.docs.map(doc => doc.data());
    }

    async updateTask(id: string, taskDto: any) {
        const db = this.firebaseService.getDatabase();
        await db.collection('tasks').doc(id).update(taskDto);
    }

    async deleteTask(id: string) {
        const db = this.firebaseService.getDatabase();
        await db.collection('tasks').doc(id).delete();
    }
}
