import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewsTable } from "./components/NewsTable";
import { Conteiner } from "./styles/global"
import { NewsProvider } from "./hook/useNews";

export function App() {

  return (
    <NewsProvider>
      <Header />
      <Conteiner>
        <NewsTable />
      </Conteiner>
      <GlobalStyle />
    </NewsProvider>
  );
}
