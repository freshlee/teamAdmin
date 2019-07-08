export default class Task {
    constructor () {

    }
    public mission_name: string

    public getMission_name(): string {
        return this.mission_name;
    }

    public setMission_name(mission_name: string): void {
        this.mission_name = mission_name;
    }

    public task_desc: string

    public getTask_desc(): string {
        return this.task_desc;
    }

    public setTask_desc(task_desc: string): void {
        this.task_desc = task_desc;
    }

    public child_node: Array<any>

    public getChild_node(): Array<any> {
        return this.child_node;
    }

    public setChild_node(child_node: Array<any>): void {
        this.child_node = child_node;
    }

    public start_date: Date

    public getStart_date(): Date {
        return this.start_date;
    }

    public setStart_date(start_date: Date): void {
        this.start_date = start_date;
    }

    public end_date: Date

    public getEnd_date(): Date {
        return this.end_date;
    }

    public setEnd_date(end_date: Date): void {
        this.end_date = end_date;
    }

    public procedure: number

    public getProcedure(): number {
        return this.procedure;
    }

    public setProcedure(procedure: number): void {
        this.procedure = procedure;
    }

}