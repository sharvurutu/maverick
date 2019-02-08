export class MatchingUsers{
    gameId: number;
    userId: string;
    score: string;

    constructor(gameId, userId, score){

        this.gameId = gameId;
        this.userId = userId;
        this.score = score;
    }
}