import './Styles.css';
import { Link, useParams } from 'react-router-dom';

type SideBarProps = {
  arrayData: [];
};

const SideBar = (props: SideBarProps) => {
  const { id }: any = useParams();

  return (
    <div className="container__side-bar">
      {props.arrayData.map((element: any, index: number) => {
        return (
          <div key={index}>
            <Link to={`${element.path}/${id}`}>
              <p className="font-small font-text">{element.text}</p>{' '}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
