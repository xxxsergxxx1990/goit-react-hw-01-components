import css from './friendsList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/friendListItem';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friends__list}>
      {friends.map(item => (
        <FriendListItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          key={item.id}
        />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};


export default FriendsList;