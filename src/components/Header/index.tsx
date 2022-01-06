import { FormEvent, useState } from 'react';
import { Conteiner, Content } from './styles';
import { useNews } from "../../hook/useNews";

export function Header(){
    const [search, setSearch] = useState('');
    const { searchNews } = useNews();

    async function handleSearchNews(event: FormEvent){
        event.preventDefault();
        
        await searchNews(search);
    }

    return(
        <Conteiner>
            <Content onSubmit={handleSearchNews}>
                <input 
                    type="text"
                    placeholder='Pesquisar'
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                />
                <button type="submit">Search</button>
            </Content>
        </Conteiner>
    )
}