import './Styles.css';

type CardProps = {
  photo: string;
  user: string;
  date: string;
  postContent: string;
};

const Card = (props: CardProps) => {
  return (
    <div className="outer-card forum__card">
      <div className="separation-line forum__card--info">
        <img
          src={props.photo}
          alt="Foto de Usuário"
          className="forum__card--info-photo"
        />
        <p className="font-text font-med forum__card--info-text">
          {props.user}
        </p>
        <p className="font-text font-med">{props.date}</p>
      </div>

      <div className="forum__card--post">
        <p className="font-input font-med forum__card--post-text">
          {props.postContent}
        </p>
      </div>
    </div>
  );
};

export default Card;
