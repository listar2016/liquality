export const api = {
    getMarketInfo: async () => {
        const endpoint = 'https://liquality.io/swap/agent/api/swap/marketinfo'
        const  response = await fetch(endpoint)
        if (response.status === 200) {
            let data = await response.json();
            return data
        }
        return []
    }
}