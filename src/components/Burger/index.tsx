import classNames from 'classnames';
import styles from './Burger.module.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setValueBuregrMenu } from '../../redux/otherSlice';

const Burger = () => {
  const { valueBuregrMenu } = useAppSelector((state) => state.otherSlice);
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(setValueBuregrMenu(!valueBuregrMenu))}
      className={classNames(styles.card)}
    >
      {!valueBuregrMenu ? <AiOutlineMenu /> : <AiOutlineClose />}
    </div>
  );
};

export default Burger;
