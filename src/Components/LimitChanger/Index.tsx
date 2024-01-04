type LimitChangerProps = {
  content: string;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
};

const LimitChanger = (props: LimitChangerProps) => {
  return (
    <p
      className="font-text font-small outer-card number__card"
      onClick={() => props.setLimit(parseInt(props.content))}
    >
      {props.content}
    </p>
  );
};

export default LimitChanger;
