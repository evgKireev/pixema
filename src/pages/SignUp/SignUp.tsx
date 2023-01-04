import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/logo';
import Button, { ButtonTypeEnum } from '../../components/Button';
import FormContainer from '../../components/FormContainer';
import Input from '../../components/Input';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import {
  getRegisterUser,
  setMailValue,
  setPassworConfirmdValue,
  setPasswordValue,
} from '../../redux/signUpAuthSlice';
import styles from './SignUp.module.scss';
import Loading from '../../components/Loader';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const [seePassword, setSeePassword] = useState(false);
  const [seePasswordConfirm, setSeePasswordConfirm] = useState(false);
  const { passwordValue } = useAppSelector((state) => state.signUpAuthSlice);
  const { mailValue } = useAppSelector((state) => state.signUpAuthSlice);
  const { nameUser } = useAppSelector((state) => state.signUpAuthSlice);
  const { statusRegisterUser } = useAppSelector(
    (state) => state.signUpAuthSlice
  );

  const { passworConfirmdValue } = useAppSelector(
    (state) => state.signUpAuthSlice
  );
  const navigate = useNavigate();
  const validationForm = useMemo(() => {
    return (
      mailValue.length > 5 &&
      passwordValue.length > 5 &&
      passworConfirmdValue.length > 5
    );
  }, [mailValue, passwordValue, passworConfirmdValue]);
  return (
    <div className={styles.inner}>
      <div className={styles.logo}>
        <Link to={'/'}>
          <Logo />
        </Link>
      </div>
      {statusRegisterUser === 'pending' ? (
        <div className={styles.spinner}>
          <Loading />{' '}
        </div>
      ) : (
        <FormContainer title={'Sign Up'}>
          <>
            <div className={styles.innerInput}>
              <div>
                <span>Email</span>
                <Input
                  className={styles.input}
                  onChange={(e) => dispatch(setMailValue(e.target.value))}
                  disabled={false}
                  error={false}
                  placeholder={'Your email'}
                />
              </div>
              <div>
                <span>Password</span>
                <div className={styles.innerInp}>
                  <Input
                    className={styles.input}
                    onChange={(e) => dispatch(setPasswordValue(e.target.value))}
                    disabled={false}
                    error={false}
                    placeholder={'Your password'}
                    type={seePassword ? 'text' : 'password'}
                  />
                  <div onClick={() => setSeePassword(!seePassword)}>
                    {seePassword ? (
                      <AiOutlineEyeInvisible className={styles.eye} />
                    ) : (
                      <AiOutlineEye className={styles.eye} />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <span>Confirm password</span>
                <div className={styles.innerInp}>
                  <Input
                    className={styles.input}
                    onChange={(e) =>
                      dispatch(setPassworConfirmdValue(e.target.value))
                    }
                    disabled={false}
                    error={false}
                    placeholder={'Confirm password'}
                    type={seePasswordConfirm ? 'text' : 'password'}
                  />
                  <div
                    onClick={() => setSeePasswordConfirm(!seePasswordConfirm)}
                  >
                    {seePasswordConfirm ? (
                      <AiOutlineEyeInvisible className={styles.eye} />
                    ) : (
                      <AiOutlineEye className={styles.eye} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Button
              title={'Sign up'}
              type={ButtonTypeEnum.Primary}
              onClick={() =>
                dispatch(
                  getRegisterUser({
                    datas: {
                      email: mailValue,
                      password: passwordValue,
                      password_confirmation: passworConfirmdValue,
                      purchase_code: nameUser,
                    },
                    callback: (link) => navigate(link),
                  })
                )
              }
              disabled={!validationForm}
              className={styles.btn}
            />
            <div className={styles.textLink}>
              Already have an account?
              <Link to={'/signin'}>
                <span>Sign In</span>
              </Link>
            </div>
          </>
        </FormContainer>
      )}
    </div>
  );
};

export default SignUp;
