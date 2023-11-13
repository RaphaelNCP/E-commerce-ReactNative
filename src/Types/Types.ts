export type Cards = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}[];
export type TitleProps = {
  titulo: string;
};
export type CardProps = {
  id?: number;
  nome: string;
  descricao: string;
  imagem: string;
  preco: number;
};
export type SectionProps = {
  titulo: string;
  mock: Cards;
};
export type ModalProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
