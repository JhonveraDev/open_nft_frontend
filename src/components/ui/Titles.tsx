type TitleProps = {
  title: string;
};

export const Titles = ({ title }: TitleProps) => {
  return (
    <div className="titles">
      <h2>{title}</h2>
    </div>
  )
}
