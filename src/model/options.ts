export interface OptionData {
  id: number;
  required: boolean;
  shortName: string;
  longName: string;
  description: string;
  isFlag: boolean;
  defaultValue?: string;
  functionCall?: string;
  exitCode?: number;
}

export const defaultScriptDescription = "Script Description";

export const defaultOptions: OptionData[] = [
  {
    id: 0,
    required: false,
    shortName: "h",
    longName: "help",
    description: "Show this help message.",
    isFlag: true,
    functionCall: "usage",
    exitCode: 0,
  },
  {
    id: 1,
    required: false,
    shortName: "v",
    longName: "version",
    description: "Show version information.",
    isFlag: true,
    functionCall: "version",
    exitCode: 0,
  },
  {
    id: 2,
    required: true,
    shortName: "t",
    longName: "test",
    description: "Test parameter",
    isFlag: false,
    defaultValue: "test content",
  },
];
