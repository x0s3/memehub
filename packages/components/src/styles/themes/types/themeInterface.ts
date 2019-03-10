export interface ThemeInterface {
    dark?: boolean,
    roundness: number,
    colors: {
        primary: string,
        accent: string,
        background: string,
        surface: string,
        text: string,
        disabled: string,
        placeholder: string,
        backdrop: string
    }
}