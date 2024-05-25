// export async function get(options: AjaxOptions) {
//     try {
//       const res = await fetch(HOST + options.url, { method: "GET" })
//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }
//       return await res.json();
//     } catch (error) {
//       throw new Error(`Request failed: ${error}`);
//     }
// }

// export async function post(options: AjaxOptions, body: any) {
//     const { url, method = "POST", headers = {} } = options; 
//     const res = await fetch(HOST + url, {
//         method,
//         body: body ? JSON.stringify(body) : undefined,
//         headers: { "Content-Type": "application/json", ...headers, },
//     });
//     if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`); 
//     }

//     return res.json(); 
// }


// type AjaxOptions = {
//   url: string;
//   method?: "GET" | "POST";
//   body?: any;
//   headers?: { [key: string]: any };
// };

const HOST = "http://localhost:3001";

export async function get(url: string) {
    const res = await fetch(HOST + url); 
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`); 
    }
    return res.json(); 
}

export async function post(url: string, body?: any) {
    const res = await fetch(HOST + url, {
        method: "POST",
        body: body ? JSON.stringify(body) : undefined,
    });
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`); 
    }
    return res.json(); 
}
