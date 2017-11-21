import store from './store';
export async function search() {
    const url = "data/earth-like-results.json";   
    const resultA = await fetch (url);
    const resultB = await resultA.json();    
    searchItem(resultB.results);
}

export async function searchItem(resultB) {
    const url = resultB;    
    let newList= [...store.getState().items];
        for(let i in url)
    {
        fetch(url[i])
            .then(response => response.json())
            .then(result =>  {                
                newList.push(result);
        })
    }
    store.setState({
        items: newList
    })
}







