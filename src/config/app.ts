type AppConfigType = {
    name: string,
    github: {
        title: string,
        url: string
    },
    author: {
        name: string,
        url: string
    },
}

export const appConfig: AppConfigType = {
    name: import.meta.env.VITE_APP_NAME ?? "UI Builder",
    github: {
        title: "React Shadcn Starter",
        url: "https://github.com/nichom03/react-shadcn-starter",
    },
    author: {
        name: "nichom03",
        url: "https://github.com/nichom03",
    }
}

export const baseUrl = import.meta.env.VITE_BASE_URL ?? ""
