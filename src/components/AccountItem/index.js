import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './AccontItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7130082218559832091~c5_100x100.jpeg?x-expires=1663678800&x-signature=bbTaDazRiYhRJqNCUeKCLYNOCe0%3D"
        alt="Hoa"
      />
      <div className={cx('info')}>
        <div className={cx('name')}>
          <h4> Nguyen Van A</h4>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </div>
        <p className={cx('username')}>Nguyen van a</p>
      </div>
    </div>
  );
}

export default AccountItem;
