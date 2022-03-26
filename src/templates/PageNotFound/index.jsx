import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html='<p>Página que você busca não foi encontrada. <a href="/">Clique para voltar"</a></p>'
    />
  );
};
