import { Injectable } from "@angular/core"

@Injectable()
export class Constants {

    BD_URL_LOCAL: string = 'http://localhost:3001'
    BD_URL: string = 'https://my-json-server.typicode.com/jehymes/db-json'

    TABLES = {
        TASKS: '/tasks',
        ANNOTATIONS: '/annotations'
    }

    routesConst = {
        tasks: '/tasks',
        home: '/home',
        annotations: '/annotations',
        task_create: '/createTasks'
    }

    MESAGE = {
        TASK_SUCCESS: 'Tarefa criada com sucesso!',
        ANOTACAO_SUCCESS: 'Anotação criada com sucesso. Aguarde a lista ser atualizada!',
        TASK_UPDATE: 'Tarefa atualizada com sucesso!',
        ANOTACAO_UPDATE: 'Anotação atualizada com sucesso. Aguarde a lista ser atualizada!',
        TASK_DELETE: 'Tarefa excluida com sucesso!',
        ANOTACAO_DELETE: 'Anotação excluída com sucesso. Aguarde a lista ser atualizada!',
        ERROR_HTTP: 'Ocorreu um erro ao executar a ação!'
    }

    TYPES_MESAGE = {
        SUCCESS: 'SUCCESS',
        CANCEL: 'CANCEL',
        ERROR: 'ERROR'
    }

    TIMES = {
        1: 1000,
        1_5: 1500,
        2: 2000,
        2_5: 2500,
        3: 3000,
        3_5: 3500,
        4: 4000,
        4_5: 4500,
        5: 5000,
        5_5: 5500
    }
}