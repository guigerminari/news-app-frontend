import { NewsItem } from "../NewsItem";
import { Conteiner } from "./styles";
import { useNews } from "../../hook/useNews";


export function NewsTable(){
    const {news} = useNews();

    return (
        <Conteiner>
            {news.map(newsItem => (
                <NewsItem key={newsItem.url} item={newsItem} />
            ))}
        </Conteiner>
    );
}