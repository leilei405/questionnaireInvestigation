const HOST = "http://localhost:3333";

export async function get(url: string) {
    const res = await fetch(HOST + url); 
    if (!res.ok) {
        throw new Error(`请输入正确问卷id`); 
    }
    return res.json(); 
}

export async function post(url: string, body?: any) {
    const res = await fetch(HOST + url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body ? JSON.stringify(body) : undefined,
    });
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`); 
    }
    return res.json(); 
}
