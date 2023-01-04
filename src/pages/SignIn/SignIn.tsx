import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/logo';
import Button, { ButtonTypeEnum } from '../../components/Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import FormContainer from '../../components/FormContainer';
import Input from '../../components/Input';
import {
  getSignInUser,
  setMailValue,
  setPasswordValue,
} from '../../redux/signInAuthSlice';
import styles from './SignIn.module.scss';
import { useMemo, useState } from 'react';
import Loading from '../../components/Loader';

const SignIn = () => {
  const dispach = useAppDispatch();
  const { mailValue } = useAppSelector((state) => state.signInAuthSlice);
  const { passwordValue } = useAppSelector((state) => state.signInAuthSlice);
  const { statusSignIn } = useAppSelector((state) => state.signInAuthSlice);
  const [seePassword, setSeePassword] = useState(false);
  const navigate = useNavigate();

  const validationForm = useMemo(() => {
    return mailValue.length > 5 && passwordValue.length > 5;
  }, [mailValue, passwordValue]);

  return (
    <div>
      <div className={styles.logo}>
        <Link to={'/'}>
          <Logo />
        </Link>
      </div>
      {statusSignIn === 'pending' ? (
        <div className={styles.spinner}>
          <Loading />
        </div>
      ) : (
        <FormContainer title={'Sign In'}>
          <>
            <div className={styles.innerInput}>
              <div>
                <span>Email</span>
                <Input
                  className={styles.input}
                  onChange={(e) => dispach(setMailValue(e.target.value))}
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
                    onChange={(e) => dispach(setPasswordValue(e.target.value))}
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
            </div>
            <span className={styles.spanQ}>Forgot password?</span>{' '}
            <Button
              title={'Sign in'}
              type={ButtonTypeEnum.Primary}
              onClick={() =>
                dispach(
                  getSignInUser({
                    datas: {
                      email: mailValue,
                      password: passwordValue,
                      token_name: 'token',
                    },
                    callback: () => navigate('/'),
                  })
                )
              }
              disabled={!validationForm}
              className={styles.btn}
            />
            <div className={styles.textLink}>
              Don’t have an account?{' '}
              <Link to={'/signup'}>
                <span>Sign Up</span>
              </Link>
            </div>
          </>
        </FormContainer>
      )}
    </div>
  );
};

export default SignIn;
