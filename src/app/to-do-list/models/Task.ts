export interface Task {
    id: number;
    name: string;
    description?: string;
    startDate?: Date;
    endDate?: Date;
}