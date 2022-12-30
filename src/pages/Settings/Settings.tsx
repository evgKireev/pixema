import classNames from 'classnames';
import { useEffect } from 'react';
import Button, { ButtonTypeEnum } from '../../components/Button';
import Input from '../../components/Input';
import Switch from '../../components/Switch';
import { useAppSelector } from '../../redux/hooks';
import styles from './Settings.module.scss';

const Settings = () => {
  const { valueTheme } = useAppSelector((state) => state.themeSlice);
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(valueTheme));
  }, [valueTheme]);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.titile}>Profile</h2>
      <div
        className={classNames(styles.innerProfile, {
          [styles.ThemeWhite]: valueTheme,
        })}
      >
        <div className={styles.item}>
          <span>Name</span>
          <div
            className={classNames(styles.int, {
              [styles.ThemeWhite]: valueTheme,
            })}
          >
            {'Artem Lapitsky'}
          </div>
        </div>
        <div className={styles.item}>
          <span>Email</span>
          <div
            className={classNames(styles.int, {
              [styles.ThemeWhite]: valueTheme,
            })}
          >
            {'a.lapitsky@gmail.com'}
          </div>
        </div>
      </div>
      <h2 className={styles.titile}>Password</h2>
      <div
        className={classNames(styles.innerPassword, {
          [styles.ThemeWhite]: valueTheme,
        })}
      >
        <div className={styles.item}>
          <span>Password</span>
          <Input
            disabled={false}
            error={false}
            placeholder={'Your password'}
            onChange={() => {}}
          />
        </div>
        <div className={styles.item}>
          <div style={{ marginBottom: '12px' }}>
            <span>New password</span>
            <Input
              onChange={() => {}}
              disabled={false}
              error={false}
              placeholder={'New password'}
            />
          </div>
          <div>
            <span>Confirm password</span>
            <Input
              onChange={() => {}}
              disabled={false}
              error={false}
              placeholder={'Confirm password'}
            />
          </div>
        </div>
      </div>
      <h2 className={styles.titile}>Color mode</h2>
      <div
        className={classNames(styles.ColorMode, {
          [styles.ThemeWhite]: valueTheme,
        })}
      >
        <div className={styles.itemTheme}>
          <span> {valueTheme ? 'White' : 'Dark'}</span>
          <span style={{ color: 'grey', fontWeight: '500' }}>
            {valueTheme ? 'Use white thema' : 'Use dark thema'}
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
          className={''}
        />
        <Button
          title={'Save'}
          type={ButtonTypeEnum.Primary}
          onClick={() => {}}
          disabled={false}
          className={''}
        />
      </div>
    </div>
  );
};

export default Settings;
