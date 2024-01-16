type PageCountProps = {
  type: string;
  content: string;
  offset: number;
  limit: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
};

const PageCount = (props: PageCountProps) => {
  const pageChanger = () => {
    if (props.type == 'prev') {
      props.setOffset(props.offset - 1 * props.limit);
    } else if (props.type == 'next') {
      props.setOffset(props.offset + 1 * props.limit);
    } else {
      props.setOffset((parseInt(props.content) - 1) * props.limit);
    }
  };

  return (
    <p
      className="font-text font-small outer-card changers__card"
      onClick={pageChanger}
    >
      {props.content}
    </p>
  );
};

export default PageCount;
