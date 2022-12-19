import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo';
import Button, { ButtonTypeEnum } from '../../components/Button';
import FormContainer from '../../components/FormContainer';
import Input from '../../components/Input';
import styles from './SignUp.module.scss';

const SignUp = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.logo}>
        <Logo />
        <FormContainer title={'Sign Up'}>
          <>
            <div className={styles.innerInput}>
              <div>
                <span>Name</span>
                <Input
                  disabled={false}
                  error={false}
                  placeholder={'Your name'}
                />
              </div>
              <div>
                <span>Email</span>
                <Input
                  disabled={false}
                  error={false}
                  placeholder={'Your email'}
                />
              </div>
              <div>
                <span>Password</span>
                <Input
                  disabled={false}
                  error={false}
                  placeholder={'Your password'}
                />
              </div>
              <div>
                <span>Confirm password</span>
                <Input
                  disabled={false}
                  error={false}
                  placeholder={'Confirm password'}
                />
              </div>
            </div>
            <Button
              title={'Sign up'}
              type={ButtonTypeEnum.Primary}
              onClick={() => {}}
              disabled={false}
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
      </div>
    </div>
  );
};

export default SignUp;
