export interface Task {
    id?: number
    taskNumber: number
    taskName: string
    taskDescription?: string
    taskDateCreation?: Date
    taskDateDelivery?: Date
    taskFinalized: boolean
}