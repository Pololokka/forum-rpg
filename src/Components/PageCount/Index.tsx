type PageCountProps = {
  type: string;
  content: string;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
};

const PageCount = (props: PageCountProps) => {
  const pageChanger = () => {
    if (props.type == 'prev') {
      props.setOffset(props.offset - 1 * 10);
    } else if (props.type == 'next') {
      props.setOffset(props.offset + 1 * 10);
    } else {
      props.setOffset(parseInt(props.content) - 1 * 10);
    }
  };

  return (
    <p
      className="font-text font-small outer-card number__card"
      onClick={pageChanger}
    >
      {props.content}
    </p>
  );
};

export default PageCount;
