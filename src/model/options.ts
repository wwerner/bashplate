export interface OptionData {
    required: boolean,
    shortName: string,
    longName: string,
    description: string,
    isFlag: boolean,
    defaultValue?: string,
    functionCall?: string,
    exitCode?: number,
}

export const defaultOptions : OptionData[] = [
    {
        required: false,
        shortName: "h",
        longName: "help",
        description: "Show this help message.",
        isFlag: true,
        functionCall: "usage",
        exitCode: 0
    },
    {
        required: false,
        shortName: "v",
        longName: "version",
        description: "Show version information.",
        isFlag: true,
        functionCall: "version",
        exitCode: 0
    },
    {
        required: false,
        shortName: "t",
        longName: "test",
        description: "Test parameter",
        isFlag: true,
        defaultValue: "test content",
    }
] 