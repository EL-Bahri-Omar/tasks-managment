export class Task {
    public get taskStatus(): string {
        return this._taskStatus;
    }
    public set taskStatus(value: string) {
        this._taskStatus = value;
    }
    public get taskName(): string {
        return this._taskName;
    }
    public set taskName(value: string) {
        this._taskName = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    constructor(
        private _id: number, 
        private _taskName: string,
        private _taskStatus: string
    ){}

}
