import Logo from '../../assets/img/logo';
import Button, { ButtonTypeEnum } from '../../components/Button';
import FormContainer from '../../components/FormContainer';
import Input from '../../components/Input';
import styles from './SignIn.module.scss';

const SignIn = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.logo}>
        <Logo />
        <FormContainer title={'Sign In'}>
          <>
            <div className={styles.innerInput}>
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
            </div>
            <span className={styles.spanQ}>Forgot password?</span>{' '}
            <Button
              title={'Sign in'}
              type={ButtonTypeEnum.Primary}
              onClick={() => {}}
              disabled={false}
              className={styles.btn}
            />
            <div className={styles.textLink}> 
              Don’t have an account? <span>Sign Up</span>
            </div>
          </>
        </FormContainer>
      </div>
    </div>
  );
};

export default SignIn;
