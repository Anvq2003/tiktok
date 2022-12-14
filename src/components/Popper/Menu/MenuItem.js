import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx('menu-item', {
    separate: data.separate,
  });
  return (
    <Button onClick={onClick} className={classes} leftIcon={data.icon} to={data.to}>
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
};

export default MenuItem;
