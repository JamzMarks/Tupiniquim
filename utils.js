function getFullPrice(price, percentage){
    const perc = 100 - percentage;
    const result = (price * 100) / perc;
    return result;
}

async function fetchData(dataUrl){
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
