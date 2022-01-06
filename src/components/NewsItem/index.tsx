import { Conteiner} from './styles';

type NewsItemType = {
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string
}

type NewsItemProps = {
    item: NewsItemType
}

export function NewsItem({item} : NewsItemProps){
    let img = <></>;
    if (item.urlToImage) {
        img = <img
                src={item.urlToImage}
                alt={item.title} />
    }

    return(
        <Conteiner href={item.url} target="_blank" title={item.title}>
            {img}
            <strong>{item.title}</strong>
            <span>{new Intl.DateTimeFormat('pt-BR').format(new Date(item.publishedAt))} - {item.description}</span>
        </Conteiner>
    )
}