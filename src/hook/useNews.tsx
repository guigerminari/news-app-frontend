import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

type NewsItemType = {
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string
}

type NewsProviderProps = {
    children: ReactNode
}

type NewsContextData = {
    news: NewsItemType[];
    searchNews: (searchText: string) => Promise<void>;
}

const NewsContext = createContext<NewsContextData>({} as NewsContextData);

export function NewsProvider({ children }: NewsProviderProps) {

    const [ news, setNews ] = useState<NewsItemType[]>([]);

    useEffect(() => {
        api.get('/news')
            .then(response => {
                setNews(response.data.articles);
            });
    },[]);

    async function searchNews(searchText: string){
        api.get('/news/' + searchText)
            .then(response => {
                setNews(response.data.articles);
            });
    }

    return (
        <NewsContext.Provider value={{searchNews, news}}>
            {children}
        </NewsContext.Provider>
    )
}

export function useNews(){
    const context = useContext(NewsContext);

    return context;
}