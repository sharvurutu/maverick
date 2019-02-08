export interface Search {

    gameId: number;
    gameName: string;
    gameImage: string;
    
    gameType: {
        gameTypeId: number;
        gameTypeName :string;
        gameTypeDescription: string;
    }
    gameDescription: string;
    gameRules: string;

}