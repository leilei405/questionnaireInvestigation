export type PropsType = {
    errno: number;
    data?: {
        id: string; 
        title: string; 
        desc?: string; 
        js?: string; 
        css?: string;
        isPublished: boolean; 
        isDeleted: boolean;
        componentList: {
            [key: string]: any;
        }[]
    }
    msg?: string;
    // id: string; 
    // [key: string]: any;
};
