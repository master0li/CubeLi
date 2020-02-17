import { Solve } from './solve';

export class Session {
    public ID: string = "";
    public Name: string = "";
    public Solves: Solve[] = [];
    public Puzzle: string = "";
    public BestSingle: number = 0;
    public BestAo5: number = 0;
    public BestAo12: number = 0;
    public BestAo100: number = 0;
}
