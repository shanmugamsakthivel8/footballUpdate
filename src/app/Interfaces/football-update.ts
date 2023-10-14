export interface Country {
    id: string;
    name: string;
    leagueId: number;
}

export interface ServiceParameters {
    league: string;
    season?: string;
    team?: string;
    last?: string;
}

export interface Paging {
    current: number;
    total: number;
}


export interface CountryStandingTeamList {
    get: string;
    parameters: ServiceParameters;
    errors: [];
    results: number;
    paging: Paging;
    response: [
        {
            league: {
                id: number;
                name: string;
                country: string;
                logo: string;
                flag: string;
                season: number;
                standings: Array<Array<StandingTeamData>>;
            };
        }
    ];
}

export interface StandingTeamData {
    rank: number;
    team: {
        id: number;
        name: string;
        logo: string;
    };
    points: number;
    goalsDiff: number;
    group: string;
    form: string;
    status: string;
    description: string;
    all: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: {
            for: number;
            against: number;
        };
    };
    home: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: {
            for: number;
            against: number;
        };
    };
    away: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: {
            for: number;
            against: number;
        };
    };
    update: string;
}

export interface TeamInfo {
    id: number;
    name: string;
    logo: string;
    winner: boolean;
};

export interface Goals {
    home: number | string;
    away: number | string;
}


export interface TeamResult    {
    fixture: {
        id: number;
        referee: string;
        timezone: string;
        date: string;
        timestamp: number;
        periods: {
            first: number;
            second: number;
        };
        venue: {
            id: number;
            name: string;
            city: string;
        };
        status: {
            long: string;
            short: string;
            elapsed: number;
        };
    };
    league: {
        id: number;
        name: string;
        country: string;
        logo: string;
        flag: string;
        season: number;
        round: string;
    };
    teams: {
        home: TeamInfo;
        away: TeamInfo;
    };
    goals: Goals;
    score: {
        halftime: Goals;
        fulltime: Goals;
        extratime: Goals;
        penalty: Goals;
    };
}

export interface TopTenResults {
    get: string;
    parameters: ServiceParameters;
    errors: [];
    results: number;
    paging: Paging;
    response: Array<TeamResult>
}
