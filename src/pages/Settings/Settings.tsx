import Button, { ButtonTypeEnum } from '../../components/Button';
import Input from '../../components/Input';
import Switch from '../../components/Switch';
import styles from './Settings.module.scss';
const Settings = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.titile}>Profile</h2>
      <div className={styles.innerProfile}>
        <div className={styles.item}>
          <span>Name</span>
          <div className={styles.int}>{'Artem Lapitsky'}</div>
        </div>
        <div className={styles.item}>
          <span>Email</span>
          <div className={styles.int}>{'a.lapitsky@gmail.com'}</div>
        </div>
      </div>
      <h2 className={styles.titile}>Password</h2>
      <div className={styles.innerPassword}>
        <div className={styles.item}>
          <span>Password</span>
          <Input disabled={false} error={false} placeholder={'Your password'} />
        </div>
        <div className={styles.item}>
          <div style={{ marginBottom: '12px' }}>
            <span>New password</span>
            <Input
              disabled={false}
              error={false}
              placeholder={'New password'}
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
      </div>
      <h2 className={styles.titile}>Color mode</h2>
      <div className={styles.ColorMode}>
        <div className={styles.itemTheme}>
          <span>Dark</span>
          <span style={{ color: 'grey', fontWeight: '500' }}>
            {'Use dark thema'}
          </span>
        </div>
        <Switch />
      </div>
      <div className={styles.buttonInner}>
        <Button
          title={'Cancel'}
          type={ButtonTypeEnum.Secondary}
          onClick={() => {}}
          disabled={false}
        />
        <Button
          title={'Save'}
          type={ButtonTypeEnum.Primary}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </div>
  );
};

export default Settings;
