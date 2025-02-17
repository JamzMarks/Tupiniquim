export async function fetchData(dataUrl){
    try {
        const response = await fetch(dataUrl);
        if (!response.ok) {
            throw new Error(`Erro ao carregar JSON: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
    }
}