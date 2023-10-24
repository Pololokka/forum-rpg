import './Styles.css';
import { Link, useParams } from 'react-router-dom';

type SideBarProps = {
  arrayData: { text: string; path: string }[];
};

const SideBar = (props: SideBarProps) => {
  const { id }: any = useParams();

  return (
    <nav className="container__side-bar">
      {props.arrayData.map((element: any, index: number) => {
        return (
          <Link
            key={index}
            className="link__side-bar"
            to={`${element.path}/${id}`}
          >
            <p className="font-small font-text">{element.text}</p>
          </Link>
        );
      })}
      <Link className="link__side-bar" to="/groups">
        <p className="font-small font-text">Mesas</p>
      </Link>
    </nav>
  );
};

export default SideBar;
